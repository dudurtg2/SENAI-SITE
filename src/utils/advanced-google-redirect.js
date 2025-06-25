// 🚀 Script de Redirecionamento Automático do Google Login
// Execute este código no console da página com dados JSON

console.log('🔧 Iniciando processamento do login Google...');

// Função para extrair dados da tela atual
function extractGoogleAuthData() {
    try {
        // Tentar capturar dados da tela/DOM
        const bodyText = document.body.innerText || document.body.textContent;
        console.log('Conteúdo da página:', bodyText.substring(0, 200));
        
        // Procurar por padrões JSON
        let jsonData = null;
        
        // Padrão 1: JSON na URL
        const url = window.location.href;
        let jsonStart = url.indexOf('{"accessToken"');
        if (jsonStart !== -1) {
            console.log('📍 Dados encontrados na URL');
            let jsonString = decodeURIComponent(url.substring(jsonStart));
            jsonData = JSON.parse(jsonString);
        }
        
        // Padrão 2: JSON no corpo da página
        if (!jsonData) {
            jsonStart = bodyText.indexOf('{"accessToken"');
            if (jsonStart !== -1) {
                console.log('📍 Dados encontrados no corpo da página');
                let jsonString = bodyText.substring(jsonStart);
                // Encontrar o fim do JSON
                let braceCount = 0;
                let endIndex = jsonStart;
                for (let i = jsonStart; i < bodyText.length; i++) {
                    if (bodyText[i] === '{') braceCount++;
                    if (bodyText[i] === '}') braceCount--;
                    if (braceCount === 0) {
                        endIndex = i + 1;
                        break;
                    }
                }
                jsonString = bodyText.substring(jsonStart, endIndex);
                jsonData = JSON.parse(jsonString);
            }
        }
        
        // Padrão 3: Dados estruturados na tela
        if (!jsonData && bodyText.includes('accessToken')) {
            console.log('📍 Tentando extrair dados estruturados...');
            
            // Extrair campos individualmente se estiver formatado
            const accessTokenMatch = bodyText.match(/"accessToken":\s*"([^"]+)"/);
            const emailMatch = bodyText.match(/"email":\s*"([^"]+)"/);
            const nomeMatch = bodyText.match(/"nome":\s*"([^"]+)"/);
            const tipoMatch = bodyText.match(/"tipo":\s*"([^"]+)"/);
            const uuidMatch = bodyText.match(/"uuid":\s*"([^"]+)"/);
            
            if (accessTokenMatch && emailMatch) {
                jsonData = {
                    accessToken: accessTokenMatch[1],
                    usuariosEntity: {
                        email: emailMatch[1],
                        nome: nomeMatch ? nomeMatch[1] : emailMatch[1],
                        tipo: tipoMatch ? tipoMatch[1] : 'ALUNO',
                        uuid: uuidMatch ? uuidMatch[1] : null
                    }
                };
                console.log('📍 Dados reconstruídos a partir de campos individuais');
            }
        }
        
        return jsonData;
    } catch (error) {
        console.error('❌ Erro ao extrair dados:', error);
        return null;
    }
}

// Função para processar e redirecionar
function processGoogleLogin() {
    const userData = extractGoogleAuthData();
    
    if (!userData) {
        console.error('❌ Não foi possível extrair dados do usuário');
        alert('Erro: Dados de login não encontrados. Redirecionando para página de login.');
        window.location.href = 'http://localhost:3001/login';
        return;
    }
    
    console.log('✅ Dados do usuário extraídos:', userData);
    console.log('👤 Email:', userData.usuariosEntity?.email);
    console.log('🏷️ Tipo:', userData.usuariosEntity?.tipo);
    
    // Armazenar dados no sessionStorage
    sessionStorage.setItem('google_auth_data', JSON.stringify(userData));
    console.log('💾 Dados armazenados no sessionStorage');
    
    // Determinar URL de destino
    const userType = userData.usuariosEntity?.tipo;
    const frontendUrl = 'http://localhost:3001';
    
    let redirectUrl;
    if (userType === 'PROFESSOR') {
        redirectUrl = `${frontendUrl}/login/oauth2/code/google?google_auth=true&type=teacher`;
        console.log('👨‍🏫 Redirecionando para dashboard do PROFESSOR');
    } else {
        redirectUrl = `${frontendUrl}/login/oauth2/code/google?google_auth=true&type=student`;
        console.log('👨‍🎓 Redirecionando para dashboard do ALUNO');
    }
    
    // Criar overlay de sucesso
    const overlay = document.createElement('div');
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 99999;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    `;
    
    const card = document.createElement('div');
    card.style.cssText = `
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 2.5rem;
        border-radius: 15px;
        text-align: center;
        max-width: 420px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        transform: scale(0.9);
        animation: slideIn 0.3s ease-out forwards;
    `;
    
    // Adicionar animação
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            to { transform: scale(1); }
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        .spinner {
            width: 50px;
            height: 50px;
            border: 4px solid rgba(255,255,255,0.3);
            border-top: 4px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 1.5rem;
        }
    `;
    document.head.appendChild(style);
    
    card.innerHTML = `
        <div class="spinner"></div>
        <h2 style="margin: 0 0 1rem 0; font-size: 1.5rem; font-weight: 600;">
            ✅ Login realizado com sucesso!
        </h2>
        <p style="margin: 0 0 1.5rem 0; opacity: 0.9; line-height: 1.5;">
            Redirecionando para o Portal SENAI...
        </p>
        <div style="
            background: rgba(255,255,255,0.2);
            padding: 1rem;
            border-radius: 8px;
            font-size: 0.875rem;
            line-height: 1.4;
        ">
            <strong>👤 ${userData.usuariosEntity?.nome || userData.usuariosEntity?.email}</strong><br>
            <span style="opacity: 0.8;">Tipo: ${userType}</span>
        </div>
    `;
    
    overlay.appendChild(card);
    document.body.appendChild(overlay);
    
    // Redirecionar após 2.5 segundos
    setTimeout(() => {
        console.log('🚀 Redirecionando para:', redirectUrl);
        window.location.href = redirectUrl;
    }, 2500);
}

// Executar o processamento
processGoogleLogin();
