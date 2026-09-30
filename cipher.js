/**
 * Classe para gerenciar criptografia e descriptografia
 * Usa uma cifra de substituição com símbolos
 */
class SymbolCipher {
    constructor() {
        this.symbols = this.generateSymbols();
        this.charMap = new Map();
        this.reverseMap = new Map();
    }

    /**
     * Gera um conjunto de símbolos únicos para substituição
     */
    generateSymbols() {
        return [
            '◆', '★', '♠', '♣', '♥', '♦', '◇', '□',
            '■', '●', '○', '◉', '◎', '◐', '◑', '◒',
            '◓', '◔', '◕', '◖', '◗', '◘', '◙', '◚',
            '◛', '◜', '◝', '◞', '◟', '◠', '◡', '◢',
            '◣', '◤', '◥', '▲', '▼', '◀', '▶', '⬆',
            '⬇', '⬅', '➡', '⬈', '⬉', '⬊', '⬋', '✦',
            '✧', '✩', '✪', '✫', '✬', '✭', '✮', '✯',
            '✰', '✱', '✲', '✳', '✴', '✵', '✶', '✷',
            '✸', '✹', '✺', '✻', '✼', '✽', '✾', '✿',
            '❀', '❁', '❂', '❃', '❄', '❅', '❆', '❇',
            '❈', '❉', '❊', '❋', '❌', '❎', '❏', '❐',
            '❑', '❒', '❓', '❔', '❕', '❖', '❗', '❘',
            '❙', '❚', '❛', '❜', '❝', '❞', '❟', '❠',
            '❡', '❢', '❣', '❤', '❥', '❦', '❧', '❨',
            '❩', '❪', '❫', '❬', '❭', '❮', '❯', '❰',
            '❱', '❲', '❳', '❴', '❵', '❶', '❷', '❸',
            '❹', '❺', '❻', '❼', '❽', '❾', '❿', '➀',
            '➁', '➂', '➃', '➄', '➅', '➆', '➇', '➈',
            '➉', '➊', '➋', '➌', '➍', '➎', '➏', '➐',
            '➑', '➒', '➓', '➔', '➕', '➖', '➗', '➘',
            '➙', '➚', '➛', '➜', '➝', '➞', '➟', '➠'
        ];
    }

    /**
     * Cria um mapa de caracteres para símbolos
     */
    createCharacterMap(text) {
        this.charMap.clear();
        this.reverseMap.clear();
        
        // Obtém caracteres únicos do texto
        const uniqueChars = [...new Set(text)];
        
        // Embaralha os símbolos
        const shuffledSymbols = this.shuffleArray([...this.symbols]);
        
        // Cria o mapa
        uniqueChars.forEach((char, index) => {
            const symbol = shuffledSymbols[index % shuffledSymbols.length];
            this.charMap.set(char, symbol);
            this.reverseMap.set(symbol, char);
        });
    }

    /**
     * Criptografa um texto
     */
    encrypt(text) {
        this.createCharacterMap(text);
        let encrypted = '';
        
        for (let char of text) {
            encrypted += this.charMap.get(char) || char;
        }
        
        return encrypted;
    }

    /**
     * Descriptografa um texto
     */
    decrypt(encrypted, charMap) {
        let decrypted = '';
        
        for (let char of encrypted) {
            if (charMap.has(char)) {
                decrypted += charMap.get(char);
            } else {
                decrypted += char;
            }
        }
        
        return decrypted;
    }

    /**
     * Retorna o mapa atual de caracteres para símbolos
     */
    getCharacterMap() {
        return new Map(this.charMap);
    }

    /**
     * Retorna o mapa reverso de símbolos para caracteres
     */
    getReverseMap() {
        return new Map(this.reverseMap);
    }

    /**
     * Embaralha um array
     */
    shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
}

// Exportar para uso global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SymbolCipher;
}