let numero =1;
let mes = 1;

const SELECT_MES = document.getElementById('opt-mes');
const SELECT_ANO = document.getElementById('opt-ano');

while(numero <= 31) {
    document.write(numero);

    document.getElementById('opt-dia').innerHTML += `<option> ${numero} </option>`;

    numero++;
}

// do {
//     SELECT_MES.innerHTML += `<option> ${mes} </option>`;
//     mes++;
// } while (mes <= 12);

for (let ano = 2025; ano >= 1950; ano--) {

    if (ano % 2 !== 0)
    SELECT_ANO.innerHTML += `<option> ${ano} </option>`;
}

