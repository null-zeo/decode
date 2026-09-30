# 🔐 Criptografia Visual - Demonstração Interativa

Site educativo que demonstra como funciona a criptografia e descriptografia de senhas usando símbolos, mostrando todo o passo a passo do processo.

## 📋 Características

✨ **Interface Interativa**
- Campo de entrada para digitar sua senha
- Exibição em tempo real da criptografia
- Demonstração visual de cada passo

🔐 **Demonstração de Criptografia**
- Mapeamento de caracteres para símbolos
- Processo passo a passo de criptografia
- Resultado criptografado destacado

🔑 **Descriptografia Reversa**
- Cole o texto criptografado
- Veja a descriptografia passo a passo
- Recupere o texto original

📚 **Educativo**
- Seção informativa sobre cifras
- Explicações de como funciona
- Aviso sobre segurança real

## 🎨 Design

- Design moderno e responsivo
- Tema com gradiente roxo
- Animações suaves
- Interface amigável
- Suporta dispositivos móveis

## 🚀 Como Usar

1. **Abra o arquivo `index.html` em seu navegador**
   - Clique com o botão direito do mouse e selecione "Abrir com Navegador"
   - Ou arraste o arquivo para a janela do navegador

2. **Digite uma Senha**
   - Digite qualquer texto no campo "Digite sua senha aqui"
   - Veja a criptografia acontecer em tempo real

3. **Veja o Processo**
   - Observe o mapeamento de caracteres
   - Acompanhe cada passo da criptografia
   - Veja o resultado final criptografado

4. **Descriptografe**
   - Cole o texto criptografado no campo de descriptografia
   - Veja cada passo da descriptografia
   - Recupere o texto original

5. **Copie Resultados**
   - Use os botões "Copiar" para copiar textos para a área de transferência

## 📁 Estrutura do Projeto

```
decode/
├── index.html       # Arquivo HTML principal
├── styles.css       # Estilos e layout
├── cipher.js        # Lógica de criptografia (classe SymbolCipher)
├── app.js          # Lógica da aplicação (classe CipherApp)
└── README.md       # Este arquivo
```

## 💡 Como Funciona

### Algoritmo de Criptografia

Este projeto usa uma **Cifra de Substituição Simples** com símbolos:

1. **Criação do Mapa**
   - Cada caractere único do texto recebe um símbolo único
   - O mapa é criado dinamicamente baseado no texto de entrada

2. **Criptografia**
   - Cada caractere é substituído pelo seu símbolo correspondente
   - Caracteres desconhecidos são mantidos como estão

3. **Descriptografia**
   - Cada símbolo é revertido para seu caractere original
   - Usa o mapa reverso criado durante a criptografia

### Exemplo

```
Texto Original: "Olá"

Mapeamento:
O → ★
l → ♠
á → ♦

Texto Criptografado: "★♠♦"
```

## ⚠️ Aviso de Segurança

**IMPORTANTE:** Este é um projeto **educativo apenas**!

❌ **NÃO use para proteger dados reais ou sensíveis**
- A cifra de substituição simples é facilmente quebrável
- Não há segurança criptográfica real
- Dados reais precisam de algoritmos robustos como AES, RSA, etc.

✅ **USE ESTE PROJETO PARA:**
- Aprender como criptografia básica funciona
- Entender o conceito de substituição de caracteres
- Visualizar o processo de cifra simples
- Fins educacionais e de demonstração

## 📚 Conceitos Aprendidos

- **Cifra de Substituição**: Método de criptografia que substitui caracteres
- **Chave de Criptografia**: Mapa de correspondência entre caracteres e símbolos
- **Criptografia Simétrica**: Mesma chave para criptografar e descriptografar
- **Análise Passo a Passo**: Visualização de cada etapa do processo

## 🔧 Tecnologias

- **HTML5**: Estrutura da página
- **CSS3**: Estilos e animações
- **Vanilla JavaScript**: Lógica e interatividade (sem dependências externas)

## 📱 Compatibilidade

✅ Chrome, Firefox, Safari, Edge (versões recentes)
✅ Computadores, tablets, smartphones
✅ Funciona offline (sem dependências externas)

## 🎯 Extensões Possíveis

Ideias para expandir o projeto:

1. **Diferentes Algoritmos**
   - ROT13
   - Cifra de Vigenère
   - Cifra de Playfair

2. **Análise Criptográfica**
   - Frequência de caracteres
   - Teste de força

3. **Modo de Jogo**
   - Quebre a cifra
   - Adivinhe a chave

4. **Exportar/Importar**
   - Salve a chave
   - Compartilhe dados criptografados

## 📝 Licença

Este projeto é fornecido para fins educacionais.

## 👨‍💻 Autor

Criado como uma demonstração interativa de conceitos de criptografia.

---

**Aprenda, Entenda, Divirta-se! 🎓🔐**