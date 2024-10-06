
# Projeto de Estudo: JWT, Bcrypt e Express com Node.js

  

Este projeto foi criado como um estudo para explorar o uso do **JWT** (JSON Web Tokens), **Bcrypt** e a criação de um servidor básico com **Express**, utilizando exemplos **independentes** em arquivos separados. Cada arquivo demonstra uma funcionalidade específica de maneira isolada.

  

## Estrutura do Projeto

  

O projeto está organizado em três arquivos principais, cada um deles contendo exemplos separados:

  

1.  **servidor.js**: Um servidor Express básico que aceita requisições POST e retorna informações relacionadas a **JWT** e **Bcrypt**. O usuário envia um `nome` e uma `senha`, e o servidor responde com a senha criptografada e um token JWT gerado.

2.  **criacaoJWT.js**: Demonstra como criar e verificar um token JWT de maneira independente.

  

3.  **bcrypt.js**: Mostra como usar o Bcrypt para criptografar e verificar senhas em um exemplo simples.

  

### Arquivos

  

-  `servidor.js`: Exemplo de um servidor Express que integra Bcrypt e JWT.

-  `criacaoJWT.js`: Exemplo de geração e verificação de tokens JWT.

-  `bcrypt.js`: Exemplo de criptografia e verificação de senhas com Bcrypt.

  

## Instalação e Configuração

  

1.  **Clone o repositório**:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

  

2.  **Instale as dependências**:

```bash
npm install 
```

  

**Configurar variáveis de ambiente:** Crie um arquivo .env na raiz do projeto e defina a variável JWT_SECRET, que será usada para o exemplo de JWT no arquivo servidor.js e criacaoJWT.js.

  

Exemplo do arquivo .env:

  

```env
JWT_SECRET=seuSegredoSuperForteAqui
```

  

## Detalhes dos Exemplos

  

### 1. `servidor.js` - Servidor Express Integrado

  

Este exemplo demonstra a criação de um servidor Express que processa requisições POST no endpoint `/`. O servidor usa **Bcrypt** para criptografar a senha fornecida e **JWT** para gerar um token.

  

#### Como executar:

1. Inicie o servidor:

```bash
node servidor.js
```

  

2. Envie uma requisição POST para http://localhost:3000/ com o seguinte corpo JSON

```json
{
"nome": "Joao",
"senha": "minhaSenha123"
}
```

3. O servidor responderá com uma estrutura semelhante a essa:

```json
{
"nome": "Joao",
"senha": "minhaSenha123",
"senha_criptografada": "$2b$10$eiTQO4ZNEkHOIg9n8EVY9OikvUu1Rxrb3E3kXBdfb7PoqZkFsBhCK",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
"tokenValido": true
}
```

### 2. `criacaoJWT.js` - Criação e Verificação de JWT

Este exemplo demonstra a geração de um token JWT e sua verificação. Ele usa a chave secreta definida no arquivo `.env` para assinar o token.

#### Como executar:

1. Execute o arquivo diretamente:

```bash
node criacaoJWT.js
```
O script gerará um token e verificará sua validade, imprimindo as informações no console.

### 3. `bcrypt.js` - Criptografia e Verificação de Senha com Bcrypt

Este exemplo demonstra como usar o **Bcrypt** para criptografar uma senha e verificar se uma senha fornecida corresponde à versão criptografada.

#### Como executar:
1. Execute o arquivo diretamente:

```bash
node bcrypt.js
```

O script criptografará uma senha e verificará se ela corresponde à original, exibindo o resultado no console.