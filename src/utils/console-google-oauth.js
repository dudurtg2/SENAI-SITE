// 🚀 Script Direto para Console - Google OAuth Handler
// Execute este código no console da página: http://localhost:8080/login/oauth2/code/google?...

console.log('🔧 Iniciando processamento do Google OAuth...');
console.log('📍 URL atual:', window.location.href);

async function processGoogleOAuth() {
    // Extrair parâmetros da URL
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    const state = urlParams.get('state');
    
    console.log('🔍 Parâmetros encontrados:');
    console.log('  - Code:', code ? code.substring(0, 20) + '...' : 'não encontrado');
    console.log('  - State:', state ? state.substring(0, 20) + '...' : 'não encontrado');
    
    if (!code || !state) {
        console.error('❌ Code ou State não encontrados');
        alert('Erro: Parâmetros de autenticação não encontrados');
        return;
    }
    
    // Criar overlay de loading
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
        font-family: Arial, sans-serif;
    `;
    
    const loadingCard = document.createElement('div');
    loadingCard.style.cssText = `
        background: white;
        padding: 2rem;
        border-radius: 10px;
        text-align: center;
        max-width: 400px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.3);
    `;
    
    loadingCard.innerHTML = `
        <div style="
            width: 40px;
            height: 40px;
            border: 4px solid #f3f3f3;
            border-top: 4px solid #3b82f6;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem;
        "></div>
        <h2 style="margin: 0 0 0.5rem 0; color: #333;">Processando login...</h2>
        <p style="margin: 0; color: #666;" id="status">Fazendo requisição ao servidor...</p>
    `;
    
    // Adicionar animação
    const style = document.createElement('style');
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    overlay.appendChild(loadingCard);
    document.body.appendChild(overlay);
    
    const statusEl = loadingCard.querySelector('#status');
    
    try {
        console.log('🌐 Fazendo requisição para trocar code por tokens...');
        statusEl.textContent = 'Autenticando com Google...';
        
        // Fazer requisição para o backend
        const response = await fetch(`http://localhost:8080/login/oauth2/code/google?code=${encodeURIComponent(code)}&state=${encodeURIComponent(state)}`, {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        
        console.log('📡 Resposta do servidor:', response.status, response.statusText);
        
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
        }
        
        statusEl.textContent = 'Processando dados do usuário...';
        
        const userData = await response.json();
        console.log('✅ Dados do usuário recebidos:', userData);
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
        
        // Atualizar visual de sucesso
        loadingCard.innerHTML = `
            <div style="
                width: 60px;
                height: 60px;
                background: #16a34a;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1rem;
                font-size: 2rem;
            ">✅</div>
            <h2 style="margin: 0 0 1rem 0; color: #16a34a;">Login realizado com sucesso!</h2>
            <p style="margin: 0 0 1rem 0; color: #666;">Redirecionando para o Portal SENAI...</p>
            <div style="
                background: #f3f4f6;
                padding: 1rem;
                border-radius: 5px;
                font-size: 0.875rem;
                color: #374151;
            ">
                <strong>${userData.usuariosEntity?.nome || userData.usuariosEntity?.email}</strong><br>
                Tipo: ${userType}
            </div>
        `;
        
        console.log('🚀 Redirecionando em 2 segundos para:', redirectUrl);
        
        setTimeout(() => {
            window.location.href = redirectUrl;
        }, 2000);
        
    } catch (error) {
        console.error('❌ Erro durante o processamento:', error);
        
        loadingCard.innerHTML = `
            <div style="
                width: 60px;
                height: 60px;
                background: #dc2626;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 1rem;
                font-size: 2rem;
            ">❌</div>
            <h2 style="margin: 0 0 1rem 0; color: #dc2626;">Erro na autenticação</h2>
            <p style="margin: 0 0 1rem 0; color: #666;">Redirecionando para página de login...</p>
            <p style="font-size: 0.875rem; color: #999;">${error.message}</p>
        `;
        
        setTimeout(() => {
            window.location.href = 'http://localhost:3001/login';
        }, 3000);
    }
}

// Executar o processamento
processGoogleOAuth();
