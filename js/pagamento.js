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

function removerUltimoDigito(numero){
    return numero.substr(0, numero.length - 1);
}

function preencherNumero() {
    let digitos = INPUT_NUMERO.value;
    let ultimoDigito = digitos.substr(-1);

    if (isNaN(ultimoDigito)) {
        digitos = removerUltimoDigito(digitos);
    }

    if (INPUT_NUMERO.value.length > 19){
        return;
    }

    INPUT_NUMERO.value = digitos;
    SPAN_NUMERO.innerHTML = digitos;

    alterarBandeira();
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

function alterarBandeira() {
    if (INPUT_NUMERO.value.length > 1) {
        return;
    }

    document.getElementById('bandeira_visa').style.display = "none";
    document.getElementById('bandeira_mastercard').style.display = "none";

    if (INPUT_NUMERO.value === '4'){
        document.getElementById('bandeira_visa').style.display = 'block';
    }

    if (INPUT_NUMERO.value === '5'){
        document.getElementById('bandeira_mastercard').style.display = 'block';
    }
}

function preencherCVV() {
    SPAN_CVV.innerHTML = INPUT_CVV.value;
}

function mostrarFrente() {
    document.getElementById('cartao_frente').classList.add('animate__slideInRight')

    document.getElementById('cartao_frente').style.display = 'block';
    document.getElementById('cartao_verso').style.display = 'none';
}

function mostrarVerso() {
    document.getElementById('cartao_verso').classList.add('animate__animated')
    document.getElementById('cartao_verso').classList.add('animate__slideInRight')

    document.getElementById('cartao_frente').style.display = 'none';
    document.getElementById('cartao_verso').style.display = 'block';
}