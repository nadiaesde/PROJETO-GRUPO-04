// Obtém os elementos do DOM
const formularioContato = document.getElementById("formulario-contato");
const mostrarFormularioContato = document.getElementById("mostrarFormularioContato");

// Adiciona um evento de clique ao link "Contato"
mostrarFormularioContato.addEventListener("click", function () {
    // Verifica o estado atual do formulário e alterna entre mostrar e ocultar
    if (formularioContato.style.display === "none" || formularioContato.style.display === "") {
        formularioContato.style.display = "block";
    } else {
        formularioContato.style.display = "none";
    }
});