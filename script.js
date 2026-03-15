const display = document.getElementById('display');
const start = document.getElementById('comecar');
const pause = document.getElementById('pausar');
const restart = document.getElementById('rec');
const record = document.getElementById('gravar');
const list = document.getElementById('lista');

//cronometro inicia zerado
let segundos = 0;
let minutos = 0;
let horas = 0;
let cronometro; // Variável vazia para o setInterval

const contagem = () => {
    segundos += 1; //teste para contagem e restart ao atingir 60
    if (segundos === 60){
        segundos = 0;
        minutos +=1;
    }

    if (minutos === 60){
        minutos = 0;
        horas += 1;
    }

    //formatação do display
    let formatSeg = segundos.toString().padStart(2, '0');
    let formatMin = minutos.toString().padStart(2, '0');
    let formatHor = horas.toString().padStart(2, '0');

    //mostrar no display
    display.value = formatHor + ':' + formatMin + ':' + formatSeg;
};

//botões funcionais

start.addEventListener ('click', () => {
    clearInterval(cronometro);
    cronometro = setInterval(contagem, 1000);
});

pause.addEventListener ('click', () => {
    clearInterval(cronometro);
});

restart.addEventListener ('click', () => {
    clearInterval(cronometro);
    segundos = 0
    minutos = 0
    horas = 0
    display.value = "00:00:00";
});

record.addEventListener ('click', () => {
    const item = document.createElement('li');//cria novo item da lista
    item.innerText = `Registro: ${display.value}`; //add o timer no item
    list.appendChild(item); //add item na lista
});