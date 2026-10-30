//CONEXÃO E IMPORTAÇÃO - NÃO APAGAR
import { db } from "./firebase-config.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js";

//Envio do formulário
function enviarFormulario() {
    let formContato = document.querySelector(".form-contato");

    formContato.addEventListener("submit", async function (evento) {
        evento.preventDefault();

        let nome = document.getElementById("nome").value;
        let email = document.getElementById("email").value;
        let mensagem = document.getElementById("mensagem").value;

        try {
            await addDoc(collection(db, "mensagens"), {
                nome: nome,
                email: email,
                mensagem: mensagem
            });

            alert("Mensagem enviada com sucesso!");
            
            // Limpa os campos após o envio dar certo
            formContato.reset(); 

        } catch (erro) {
            console.error("Erro ao acessar o banco de dados: ", erro);
            alert("Não foi possível enviar a mensagem. Tente novamente.");
        }
    });
}

//Chamando a função
enviarFormulario()