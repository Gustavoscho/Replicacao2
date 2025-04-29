function criarInput() {
    var novoInput = document.createElement("input");
    novoInput.type = "text";
    novoInput.placeholder = "Digite algo...";
    novoInput.classList.add("inputs");
    document.getElementById("container").appendChild(novoInput);
}