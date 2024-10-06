import jwt from "jsonwebtoken"

const SENHA_JWT = "12345"
const usuario = {
    nome: "Lucas",
    senha: "12345"
}

const token_criado = jwt.sign(usuario, SENHA_JWT, { expiresIn: '1h' })

jwt.verify(token_criado, SENHA_JWT, (error, decoded) => {
    if (error) {
        console.log(`Ocorreu um erro: ${error}`);
    } else {
        console.log(`Sucesso - usuario: ${decoded.nome} | senha: ${decoded.senha}`);

    }
})