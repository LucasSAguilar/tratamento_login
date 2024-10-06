import jsonwebtoken from "jsonwebtoken";

const token = jsonwebtoken.sign({nome: "Lucas"}, "12345", {expiresIn: '1h'})

console.log(token);

jsonwebtoken.verify(token, "123545", (err, decoded)=>{
    if (err){
        console.log(`Deu um erro: ${err}`);
    } else {
        console.log(`Deu certo: ${decoded.nome}`);
    }
})