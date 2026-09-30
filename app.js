/**
 * Aplicação principal - Gerencia a interface e interações do usuário
 */
class CipherApp {
    constructor() {
        this.cipher = new SymbolCipher();
        this.encryptedData = null;
        this.init();
    }

    init() {
        this.setupElements();
        this.setupEventListeners();
        console.log('🔐 Aplicação de Criptografia Iniciada');
    }

    setupElements() {
        // Inputs
        this.passwordInput = document.getElementById('passwordInput');
        this.encryptedInput = document.getElementById('encryptedInput');
        
        // Displays
        this.mappingDisplay = document.getElementById('mappingDisplay');
        this.encryptionProcess = document.getElementById('encryptionProcess');
        this.decryptionProcess = document.getElementById('decryptionProcess');
        this.encryptedResult = document.getElementById('encryptedResult');
        this.decryptedResult = document.getElementById('decryptedResult');
        
        // Buttons
        this.togglePasswordBtn = document.getElementById('togglePassword');
        this.copyEncryptedBtn = document.getElementById('copyEncrypted');
        this.copyDecryptedBtn = document.getElementById('copyDecrypted');
        
        // Counter
        this.charCount = document.getElementById('charCount');
    }

    setupEventListeners() {
        this.passwordInput.addEventListener('input', () => this.handlePasswordInput());
        this.togglePasswordBtn.addEventListener('click', () => this.togglePasswordVisibility());
        this.encryptedInput.addEventListener('input', () => this.handleEncryptedInput());
        this.copyEncryptedBtn.addEventListener('click', () => this.copyToClipboard(this.encryptedResult));
        this.copyDecryptedBtn.addEventListener('click', () => this.copyToClipboard(this.decryptedResult));
    }

    /**
     * Processa a entrada da senha
     */
    handlePasswordInput() {
        const password = this.passwordInput.value;
        this.charCount.textContent = password.length;

        if (password.length === 0) {
            this.clearDisplays();
            return;
        }

        // Criptografa a senha
        const encrypted = this.cipher.encrypt(password);
        this.encryptedData = {
            encrypted,
            charMap: this.cipher.getCharacterMap(),
            reverseMap: this.cipher.getReverseMap()
        };

        // Atualiza as exibições
        this.updateMappingDisplay();
        this.updateEncryptionProcess(password, encrypted);
        this.updateEncryptedResult(encrypted);
    }

    /**
     * Processa a entrada do texto criptografado
     */
    handleEncryptedInput() {
        const encrypted = this.encryptedInput.value;

        if (!this.encryptedData || encrypted.length === 0) {
            this.decryptedResult.textContent = 'Sua senha descriptografada aparecerá aqui...';
            this.decryptionProcess.innerHTML = '';
            return;
        }

        // Descriptografa
        const decrypted = this.cipher.decrypt(encrypted, this.encryptedData.reverseMap);
        
        // Atualiza as exibições
        this.updateDecryptionProcess(encrypted, decrypted);
        this.updateDecryptedResult(decrypted);
    }

    /**
     * Atualiza a exibição do mapeamento de caracteres
     */
    updateMappingDisplay() {
        this.mappingDisplay.innerHTML = '';
        
        const charMap = this.encryptedData.charMap;
        const sortedChars = Array.from(charMap.keys()).sort();

        sortedChars.forEach(char => {
            const symbol = charMap.get(char);
            const mapElement = document.createElement('div');
            mapElement.className = 'character-map';
            mapElement.innerHTML = `
                <div class="original">${this.escapeHtml(char)}</div>
                <div class="arrow">→</div>
                <div class="symbol">${symbol}</div>
            `;
            this.mappingDisplay.appendChild(mapElement);
        });
    }

    /**
     * Atualiza o processo de criptografia passo a passo
     */
    updateEncryptionProcess(original, encrypted) {
        this.encryptionProcess.innerHTML = '';
        const charMap = this.encryptedData.charMap;

        for (let i = 0; i < original.length; i++) {
            const char = original[i];
            const symbol = encrypted[i];
            
            const stepElement = document.createElement('div');
            stepElement.className = 'process-step';
            stepElement.style.animationDelay = `${i * 0.05}s`;
            
            stepElement.innerHTML = `
                <span class="step-number">Passo ${i + 1}:</span>
                <span class="step-input">${this.escapeHtml(char)}</span>
                <span class="step-arrow">→</span>
                <span class="step-output">${symbol}</span>
            `;
            
            this.encryptionProcess.appendChild(stepElement);
        }
    }

    /**
     * Atualiza o resultado criptografado
     */
    updateEncryptedResult(encrypted) {
        this.encryptedResult.textContent = encrypted;
    }

    /**
     * Atualiza o processo de descriptografia passo a passo
     */
    updateDecryptionProcess(encrypted, decrypted) {
        this.decryptionProcess.innerHTML = '';
        const reverseMap = this.encryptedData.reverseMap;

        for (let i = 0; i < encrypted.length; i++) {
            const symbol = encrypted[i];
            const char = decrypted[i];
            
            const stepElement = document.createElement('div');
            stepElement.className = 'process-step';
            stepElement.style.animationDelay = `${i * 0.05}s`;
            
            stepElement.innerHTML = `
                <span class="step-number">Passo ${i + 1}:</span>
                <span class="step-input">${symbol}</span>
                <span class="step-arrow">→</span>
                <span class="step-output">${this.escapeHtml(char)}</span>
            `;
            
            this.decryptionProcess.appendChild(stepElement);
        }
    }

    /**
     * Atualiza o resultado descriptografado
     */
    updateDecryptedResult(decrypted) {
        this.decryptedResult.textContent = decrypted;
    }

    /**
     * Limpa todas as exibições
     */
    clearDisplays() {
        this.mappingDisplay.innerHTML = '';
        this.encryptionProcess.innerHTML = '';
        this.decryptionProcess.innerHTML = '';
        this.encryptedResult.textContent = 'Sua senha criptografada aparecerá aqui...';
        this.decryptedResult.textContent = 'Sua senha descriptografada aparecerá aqui...';
        this.encryptedData = null;
    }

    /**
     * Alterna a visibilidade da senha
     */
    togglePasswordVisibility() {
        const isPassword = this.passwordInput.type === 'password';
        this.passwordInput.type = isPassword ? 'text' : 'password';
        this.togglePasswordBtn.textContent = isPassword ? '🙈' : '👁️';
    }

    /**
     * Copia texto para a área de transferência
     */
    copyToClipboard(element) {
        const text = element.textContent;
        if (text === 'Sua senha criptografada aparecerá aqui...' || 
            text === 'Sua senha descriptografada aparecerá aqui...') {
            alert('Nada para copiar ainda!');
            return;
        }

        navigator.clipboard.writeText(text).then(() => {
            const btn = event.target.closest('.copy-btn');
            const originalText = btn.textContent;
            btn.textContent = '✓ Copiado!';
            btn.classList.add('copied');
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.classList.remove('copied');
            }, 2000);
        }).catch(err => {
            console.error('Erro ao copiar:', err);
            alert('Erro ao copiar para a área de transferência');
        });
    }

    /**
     * Escapa caracteres HTML
     */
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Inicia a aplicação quando o DOM está pronto
document.addEventListener('DOMContentLoaded', () => {
    new CipherApp();
});