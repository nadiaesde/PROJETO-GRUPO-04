// Obtém o formulário e a mensagem de confirmação do DOM
const formulario = document.querySelector("formulario-contato");
const mensagemConfirmacao = document.getElementById("mensagem-confirmacao");

// Adiciona um ouvinte de evento para o envio do formulário
formulario.addEventListener("submit", function (event) {
  // Impede o envio padrão do formulário
  event.preventDefault();

  // Aqui você pode adicionar lógica para enviar o formulário por e-mail (se necessário).

  // Mostra a mensagem de confirmação
  mensagemConfirmacao.style.display = "block";

              // Simula o envio do formulário (apenas para fins de demonstração)
              setTimeout(function () {
                formulario.reset(); // Limpa o formulário
                mensagemEnviado.style.display = "block"; // Exibe a mensagem de confirmação
            }, 1000); // Aguarda 1 segundo (você pode ajustar o tempo conforme necessário)

  // Limpa os campos do formulário
  formulario.reset();
});
