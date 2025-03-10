document.getElementById("menuToggle").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    var botao = document.getElementById("menuToggle");
    var ativo = menu.classList.contains("show");
    
    if (ativo) {
        menu.classList.remove("show");
        setTimeout(() => menu.style.display = "none", 300);
    } else {
        menu.style.display = "block";
        setTimeout(() => menu.classList.add("show"), 10);
    }
    
    botao.classList.toggle("active");
});