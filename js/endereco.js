const INPUT_BAIRRO = document.getElementById('bairro');
const INPUT_CIDADE = document.getElementById('cidade');
const INPUT_UF = document.getElementById('uf');
const INPUT_CEP = document.getElementById('cep');
const INPUT_LOGADOURO = document.getElementById('logradouro');

INPUT_CEP.addEventListener('blur', () => {

    if(INPUT_CEP.value.length !== 8){
        return;
    }



    let url = `https://viacep.com.br/ws/${INPUT_CEP}/json`
    fetch(url)
    .then(res => res.json())
    .then(endereco => {
        INPUT_LOGADOURO.value = endereco.logadouro;
        INPUT_BAIRRO.value = endereco.bairro;
        INPUT_CIDADE.value = endereco.localidade;
        INPUT_UF.value = endereco.uf;
    });

        let endereco = {
            logadouro: 'Rua Barca Velha',
            bairro: 'Quintino Cunha',
            cidade: 'Fortaleza',
            uf: 'CE'
        }
}) 