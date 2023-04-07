const dia = document.getElementById('dia')
const hora = document.getElementById('hora')
const minuto = document.getElementById('minuto')
const segundo = document.getElementById('segundo')

const lancamento = "14 apr 2023"

function countDown(){
    const dataLanc = new Date(lancamento)
    const hoje = new Date()

    const segTotal = (dataLanc - hoje)/1000;

    const finalDias = Math.floor(segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor(segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor(segTotal / 60 ) % 60;
    const finalSegundos = Math.floor(segTotal) % 60;

    dia.innerHTML = formatoTempo(finalDias.toString().padStart(2, '0') + 'D');
    hora.innerHTML =  formatoTempo(finalHoras + 'H')
    minuto.innerHTML =  formatoTempo(finalMinutos + 'M')
    segundo.innerHTML =  formatoTempo(finalSegundos + 'S')
}

function formatoTempo(temp){
    return temp < 10? `0${temp}` : temp;
}

countDown();
setInterval(countDown, 1000)