import express, { json } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const app = express();
const SECRET = "12345";


app.use(json());

async function encriptar(texto, saltos = 10) {
    try {
        const hashed = await bcrypt.hash(texto, saltos);
        return hashed;
    } catch (err) {
        console.log(`Ocorreu um erro ao encriptar: ${err}`);
        return texto;
    }
}

function criarJWT(usuario) {
    return jwt.sign(usuario, SECRET, { expiresIn: "1h" })
}

function validarJWT(token) {
    try {
        const decoded = jwt.verify(token, SECRET);
        return { valido: true, usuario: decoded };
    } catch (err) {
        console.log(`Ocorreu um erro: ${err}`);
        return { valido: false, erro: err.message };
    }
}


app.post("/", async (req, res) => {
    const { nome, senha } = req.body;
    const usuario = {
        nome: nome,
        senha: await encriptar(senha)
    }
    const token = criarJWT(usuario)
    const validacao = validarJWT(token);

    const resposta = {
        nome: usuario.nome,
        senha: senha,
        senha_criptografada: usuario.senha,
        token: token,
        tokenValido: validacao

    }
    res.json(resposta);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});
