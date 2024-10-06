import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config();

const usuario = {
    nome: "Lucas",
    senha: "12345"
}

const token_criado = jwt.sign(usuario, process.env.JWT_SECRET, { expiresIn: '1h' })

jwt.verify(token_criado, process.env.JWT_SECRET, (error, decoded) => {
    if (error) {
        console.log(`Ocorreu um erro: ${error}`);
    } else {
        console.log(`Sucesso - usuario: ${decoded.nome} | senha: ${decoded.senha}`);

    }
})