// Obtém os elementos do DOM
const formularioColaborador = document.getElementById("formulario-colaborador");
const mostrarFormularioColaborador = document.getElementById("mostrarFormularioColaborador");

// Adiciona um evento de clique ao link "Contato"
mostrarFormularioContato.addEventListener("click", function () {
    // Verifica o estado atual do formulário e alterna entre mostrar e ocultar
    if (formularioContato.style.display === "none" || formularioContato.style.display === "") {
        formularioContato.style.display = "block";
    } else {
        formularioContato.style.display = "none";
    }
});