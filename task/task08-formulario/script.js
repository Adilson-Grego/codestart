const etapas = document.querySelectorAll('.etapa');
const anteriorBtn = document.getElementById('anterior');
const proximoBtn = document.getElementById('proximo');
const enviarBtn = document.getElementById('enviar');
const progressBar = document.querySelector('.progress-bar');
let etapaAtual = 0;

function mostrarEtapa(etapaIndex) {
    etapas.forEach((etapa, index) => {
        if (index === etapaIndex) {
            etapa.style.display = 'block';
        } else {
            etapa.style.display = 'none';
        }
    });

    progressBar.style.width = `${(etapaIndex / (etapas.length - 1)) * 100}%`;

    if (etapaIndex === 0) {
        anteriorBtn.style.display = 'none';
    } else {
        anteriorBtn.style.display = 'block';
    }

    if (etapaIndex === etapas.length - 1) {
        proximoBtn.style.display = 'none';
        enviarBtn.style.display = 'block';
    } else {
        proximoBtn.style.display = 'block';
        enviarBtn.style.display = 'none';
    }
}

function validarEtapa(etapaIndex) {
    const campos = etapas[etapaIndex].querySelectorAll('input, textarea');
    let valido = true;

    campos.forEach(campo => {
        if (!campo.checkValidity()) {
            campo.classList.add('is-invalid');
            valido = false;
        } else {
            campo.classList.remove('is-invalid');
        }

        campo.addEventListener('input', () => {
            if (campo.checkValidity()) {
                campo.classList.remove('is-invalid');
            } else {
                campo.classList.add('is-invalid');
            }
        });
    });

    return valido;
}

proximoBtn.addEventListener('click', () => {
    if (validarEtapa(etapaAtual)) {
        etapaAtual++;
        mostrarEtapa(etapaAtual);
    }
});

anteriorBtn.addEventListener('click', () => {
    etapaAtual--;
    mostrarEtapa(etapaAtual);
});

mostrarEtapa(etapaAtual);