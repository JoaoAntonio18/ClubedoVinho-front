const TABLE = document.getElementById('table-products');


fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(dados => {
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
                        <a href="#" onclick="excluir(${product.id})" class="btn btn-outline-danger btn-sm">
                            Excluir
                        </a>
                    </td>
                </tr>
            `;
        });
    });

    function excluir(id) {
        if (false === confirm('Confirma ou sem firma?')) {
            return;
        }
    
        fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE'
        });
    
        // location.href = "";
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
    
        alert('Pronto, cadastrado com sucesso');
        location.href = "";
    }
    
    function abrirModal(nome, imagem) {
        document.getElementById('modal_produto_nome').innerHTML = nome;
        document.getElementById('modal_produto_body').innerHTML = `
            <img src="${imagem}" width="100%">
        `;
    } 


    

let dados = [
    {
        id: 1,
        nome: 'Quinta do Morgado',
        categoria: 'Vinho suave',
        imagem: 'https://deskontao.agilecdn.com.br/9666_1.jpg',
        quantidade: '10',
        valor: 'R$76,00'
    },
    {
        id: 2,
        nome: 'Vale Dom Bento',
        categoria: 'BR',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Txt3b33Kqq4ChpBozd9cfxjFGhOygD7QjQ&s',
        quantidade: '10',
        valor: 'R$2,00'
    },
    {
        id: 3,
        nome: 'Vinho Rosé',
        categoria: 'BR',
        imagem: 'https://dcdn.mitiendanube.com/stores/002/905/426/products/341550-vinho-concha-y-toro-reservado-rose-750ml-81147d742d78e58a4416970779572086-480-0.jpg',
        quantidade: '10',
        valor: 'R$50,00'
    },
];




dados.forEach(product => {
    TABLE.innerHTML += `
        <tr>
            <td>${product.id}</td>
            <td>${product.nome}</td>
            <td>${product.categoria}</td>
            <td><img src="${product.imagem}" alt="${product.nome}" width="50" class="img-thumbnail" 
                data-bs-toggle="modal" data-bs-target="#imageModal" onclick="openModal('${product.imagem}', '${product.nome}')">
            </td>
            <td>${product.quantidade}</td>
            <td>${product.valor}</td>
            <td>
                <a href="#" class="btn btn-outline-warning btn-sm">
                    Editar
                </a>
                <a href="#" class="btn btn-outline-danger btn-sm">
                    Excluir
                </a>
            </td>
        </tr>
    `;

});

function openModal(imagem, nome) {
    document.getElementById("modalImage").src = imagem;
    document.getElementById("imageModalLabel").innerText = nome; 
}

function addProduct() {
    event.preventDefault();

    let dados = {
        name: document.getElementById('nome').value,
        price: document.getElementById('price').value,
        category: document.getElementById('categoria').value,
        quantity: document.getElementById('quantity').value,
        image: document.getElementById('image').value,
    }

    fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(dados)
    });

    alert('Produto cadastrado com sucesso!');
    location.href = "";
}