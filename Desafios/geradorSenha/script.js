function gerarSenha() {
    let tamanho = parseInt(document.getElementById("tamanho").value);
    let erroElemento = document.getElementById("erro");
    let senhaElemento = document.getElementById("senha");
    
    if (tamanho < 6 || tamanho > 20) {
        erroElemento.textContent = "O tamanho da senha deve estar entre 6 e 20 caracteres.";
        senhaElemento.textContent = "";
        return;
    }
    
    erroElemento.textContent = "";
    const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let senha = "";
    for (let i = 0; i < tamanho; i++) {
        senha += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    senhaElemento.textContent = senha;
}