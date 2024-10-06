import bcrypt, { hash } from "bcrypt"

const paraCriptografar = "senha_exemplo_12345"
const pulos_criptografia = 1

bcrypt.hash(paraCriptografar, pulos_criptografia, (error, senha_criptografia) => {
    if (error) {
        console.log(`Ocorreu um erro: ${error}`);
    } else {
        console.log(`Senha criptografada: ${senha_criptografia}`);

    }
})