function atualizarRelogio() {
    const data = new Date();
    let horas = data.getHours().toString().padStart(2, '0');
    let minutos = data.getMinutes().toString().padStart(2, '0');
    let segundos = data.getSeconds().toString().padStart(2, '0');
    
    const horarioAtual = `${horas} : ${minutos} : ${segundos}`;
    document.getElementById('relogio').textContent = horarioAtual;
  }

  setInterval(atualizarRelogio, 1000);

  atualizarRelogio();