let valores;
let card01 = null;
let card02 = null;
let bloqueio = false;
let paresCombinados = 0;

function gerarQuadro() {
    valores = [1, 2, 3, 4, 1, 2, 3, 4];
    valores.sort(() => Math.random() - 0.5);
            
    const tabuleiro = document.getElementById("gameBoard");
    tabuleiro.innerHTML = "";
    paresCombinados = 0;

    valores.forEach(value => {
        const card = document.createElement("div");
        card.classList.add("card", "hidden");
        card.textContent = value;
        card.dataset.value = value;
        card.addEventListener("click", flipCard);
        tabuleiro.appendChild(card);
    });
}

function flipCard() {
    if (bloqueio || this === card01) return;

    this.classList.remove("hidden");
    if (!card01) {
        card01 = this;
        return;
    }

    card02 = this;
    bloqueio = true;

    if (card01.dataset.value === card02.dataset.value) {
        paresCombinados++;
        resetCards();
        if (paresCombinados === 4) {
            setTimeout(() => {
                alert("Parabéns! Você completou o jogo!");
                reiniciarJogo();
            }, 500);
        }
    } else {
        setTimeout(() => {
            card01.classList.add("hidden");
            card02.classList.add("hidden");
            resetCards();
        }, 1000);
    }
}

function resetCards() {
    card01 = null;
    card02 = null;
    bloqueio = false;
}

function reiniciarJogo() {
    gerarQuadro();
}

gerarQuadro();