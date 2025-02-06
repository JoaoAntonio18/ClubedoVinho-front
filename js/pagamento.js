const INPUT_NUMERO = document.getElementById('card_numero');
const INPUT_CVV = document.getElementById('card_cvv');
const INPUT_NOME = document.getElementById('card_titular');
const SELECT_MES = document.getElementById('card_mes');
const SELECT_ANO = document.getElementById('card_ano');

let hoje = new Date();

let anoFim = hoje.getFullYear() + 10;

for (let ano = hoje.getFullYear(); ano <= anoFim; ano++) {
    SELECT_ANO.innerHTML += `<option>${ano}</option>`;
}

const MESES = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
];

for (let mes = 0; mes <= 11; mes++) {
    SELECT_MES.innerHTML += `<option>${MESES[mes]}</option>`;
}

const SPAN_NUMERO = document.getElementById('resultado_numero');

function preencherNumero() {
    if (INPUT_NUMERO === '4'){
        document.getElementById('bandeira_visa').style.display = 'block';
    }

    if (INPUT_NUMERO === '5'){
        document.getElementById('bandeira_mastercard').style.display = 'block';
    }

    SPAN_NUMERO.innerHTML = INPUT_NUMERO.value;
}

const SPAN_NOME = document.getElementById('resultado_nome');

function preencherNome() {
    SPAN_NOME.innerHTML = INPUT_NOME.value;
}

const SPAN_MES = document.getElementById('resultado_mes');

function preencherMes() {
    SPAN_MES.innerHTML = SELECT_MES.value;
}

const SPAN_ANO = document.getElementById('resultado_ano');

function preencherAno() {
    SPAN_ANO.innerHTML = SELECT_ANO.value;
}

const SPAN_CVV= document.getElementById('resultado_cvv');

function preencherCVV() {
    SPAN_CVV.innerHTML = INPUT_CVV.value;
}