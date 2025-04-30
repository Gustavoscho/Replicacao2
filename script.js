function criarInput() {
    var novoInput = document.createElement("input");
    novoInput.type = "text";
    novoInput.placeholder = "Próximo ponto";
    novoInput.classList.add("proxponto");
    document.getElementById("container").appendChild(novoInput);
}