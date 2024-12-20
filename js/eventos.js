// document.body.style.backgroundColor = "red";

function alterarCor(input, cor) {
    input.style.border = '1px solid '+cor;
}

function enviar() {
    event.preventDefault(); //impedir o form de ser enviado

    let input_nome = document.getElementById('nome');

    let erro_nome = document.getElementById('erro_nome');
    let erro_desc = document.getElementById('erro_descricao')


    if (input_nome.value == '') {
        alterarCor(input_nome, 'red');
        erro_nome.style.display = 'block';
    }else {
        document.getElementById('erro_nome').style.display = 'none';
        input_nome.style.border = '1px solid green'
    }


    let input_descricao = document.getElementById('descricao');

    if (input_descricao.value == '') {
        alterarCor(input_descricao);
        erro_desc.style.display = 'block';
    } else {
        erro_desc.style.display = 'none';
        input_descricao.style.border = '1px solid green'
    }

}




// let resposta = prompt('Quer mostrar as mensagens de erro?');

// if (resposta.toLowerCase == "sim") {
//     document.getElementById('erro_nome').style.display = "block";
// }
