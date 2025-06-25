// Script para ser executado no console da página problemática
// Cole este código no console quando estiver na URL: http://localhost:8080/login/oauth2/code/google?...

(function() {
    console.log('🔧 Iniciando redirecionamento automático para o Portal SENAI...');
    
    const url = window.location.href;
    console.log('URL atual:', url);
    
    // Procurar por JSON na URL
    const jsonStart = url.indexOf('{"accessToken"');
    if (jsonStart === -1) {
        console.error('❌ Dados de usuário não encontrados na URL');
        alert('Erro: Dados de login não encontrados. Redirecionando para a página de login.');
        window.location.href = 'http://localhost:3001/login';
        return;
    }
    
    try {
        // Extrair e decodificar o JSON
        let jsonString = url.substring(jsonStart);
        jsonString = decodeURIComponent(jsonString);
        
        const userData = JSON.parse(jsonString);
        console.log('✅ Dados do usuário extraídos:', userData);
        
        // Armazenar dados no sessionStorage
        sessionStorage.setItem('google_auth_data', JSON.stringify(userData));
        
        // Determinar URL de destino baseado no tipo de usuário
        const userType = userData.usuariosEntity?.tipo;
        const frontendUrl = 'http://localhost:3001';
        
        let redirectUrl;
        if (userType === 'PROFESSOR') {
            redirectUrl = `${frontendUrl}/login/oauth2/code/google?google_auth=true&type=teacher`;
            console.log('👨‍🏫 Usuário é PROFESSOR, redirecionando para dashboard do professor');
        } else {
            redirectUrl = `${frontendUrl}/login/oauth2/code/google?google_auth=true&type=student`;
            console.log('👨‍🎓 Usuário é ALUNO, redirecionando para dashboard do aluno');
        }
        
        console.log('🚀 Redirecionando para:', redirectUrl);
        
        // Mostrar mensagem de sucesso
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
            font-family: Arial, sans-serif;
        `;
        
        const message = document.createElement('div');
        message.style.cssText = `
            background: white;
            padding: 2rem;
            border-radius: 8px;
            text-align: center;
            max-width: 400px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        `;
        
        message.innerHTML = `
            <div style="margin-bottom: 1rem;">
                <div style="
                    width: 40px;
                    height: 40px;
                    border: 4px solid #f3f3f3;
                    border-top: 4px solid #3b82f6;
                    border-radius: 50%;
                    animation: spin 1s linear infinite;
                    margin: 0 auto;
                "></div>
            </div>
            <h2 style="color: #16a34a; margin-bottom: 0.5rem;">✅ Login realizado com sucesso!</h2>
            <p style="color: #666; margin-bottom: 1rem;">Redirecionando para o Portal SENAI...</p>
            <p style="font-size: 0.875rem; color: #999;">
                Usuário: ${userData.usuariosEntity?.nome || userData.usuariosEntity?.email}<br>
                Tipo: ${userType}
            </p>
        `;
        
        // Adicionar animação de rotação
        const style = document.createElement('style');
        style.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        overlay.appendChild(message);
        document.body.appendChild(overlay);
        
        // Redirecionar após 2 segundos
        setTimeout(() => {
            window.location.href = redirectUrl;
        }, 2000);
        
    } catch (error) {
        console.error('❌ Erro ao processar dados da URL:', error);
        alert('Erro ao processar dados de login. Redirecionando para a página de login.');
        window.location.href = 'http://localhost:3001/login';
    }
})();
