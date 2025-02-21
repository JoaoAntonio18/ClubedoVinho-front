const TABLE = document.getElementById('table-products');

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