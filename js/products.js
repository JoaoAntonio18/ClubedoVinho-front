const Dinero = require('dinero.js');

document.getElementById('price').addEventListener('input', function(event) {
    let value = event.target.value;
    
    // Remove caracteres não numéricos
    value = value.replace(/\D/g, '');

    // Converte o valor para centavos
    let amount = parseInt(value || '0', 10);

    // Criar um objeto Dinero.js com o valor em centavos
    let dinero = Dinero({ amount: amount, currency: 'BRL' });

    // Formatar o valor para real (R$)
    event.target.value = dinero.toFormat('$0,0.00');
});


const TABLE = document.getElementById('table-products');

listar();

function listar() {
    fetch('http://localhost:3000/products')
        .then(res => res.json())
        .then(dados => {
            TABLE.innerHTML = '';

            dados.forEach((product) => {
                TABLE.innerHTML += `
                    <tr>
                        <td>${product.id}</td>
                        <td>${product.name}</td>
                        <td>${product.category}</td>
                        <td> <img onclick="abrirModal('${product.name}', '${product.image}')" data-bs-toggle="modal" data-bs-target="#exampleModal" src="${product.image}" width="100px"> </td>
                        <td>${product.quantity}</td>
                        <td>${product.price}</td>
                        <td>
                            <a href="#" class="btn btn-outline-warning btn-sm">
                                Editar
                            </a>
                            <a href="#" onclick="excluir('${product.id}')" class="btn btn-outline-danger btn-sm">
                                Excluir
                            </a>
                        </td>
                    </tr>
                `;
            });
        });
}


function excluir(id) {
    if (false === confirm('Confirma ou sem firma?')) {
        return;
    }

    fetch(`http://localhost:3000/products/${id}`, {
        method: 'DELETE'
    });

    alert('Excluido com sucesso');
    listar();
}


function abrirModal(nome, imagem) {
    document.getElementById('modal_produto_nome').innerHTML = nome;
    document.getElementById('modal_produto_body').innerHTML = `
        <img src="${imagem}" width="100%">
    `;
}

function addProduct() {
    event.preventDefault();

    let dados = {
        name: document.getElementById('name').value,
        price: document.getElementById('price').value,
        category: document.getElementById('category').value,
        quantity: document.getElementById('quantity').value,
        image: document.getElementById('image').value,
    };

    fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    });

    document.getElementById('form').reset();    
    
    alert('Pronto, cadastrado com sucesso');
    listar();
}