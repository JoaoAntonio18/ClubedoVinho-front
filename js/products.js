document.addEventListener("DOMContentLoaded", function () {
    const tabelaProdutos = document.getElementById("tabela-produtos");

    async function buscarProdutos() {
        try {
            const resposta = await fetch("http://localhost:3000/products");
            const produtos = await resposta.json();
            console.log("Produtos recebidos:", produtos);
            listarProdutos(produtos);
        } catch (erro) {
            console.error("Erro ao buscar produtos:", erro);
        }
    }

    function formatarPreco(valor) {
        let numero = parseFloat(valor);
    
        if (isNaN(numero)) {
            return 'R$ 0,00';
        }
    
        const preco = Dinero({ amount: Math.round(numero * 100), currency: 'BRL' });
        return preco.toFormat('$0,0.00').replace('$', 'R$ ');
    }
    

    function listarProdutos(produtos) {
        tabelaProdutos.innerHTML = ""; // Limpa a tabela antes de listar os produtos
        produtos.forEach(produto => {
            const linha = document.createElement("tr");

            linha.innerHTML = `
                <td><img src="${produto.image}" alt="${produto.title}" width="50"/></td>
                <td>${produto.title}</td>
                <td>${produto.category}</td>
                <td>${formatarPreco(produto.price)}</td>
            `;

            tabelaProdutos.appendChild(linha);
        });
    }

    async function addProduct(event) {
        event.preventDefault(); // Previne o envio do formulário padrão

        const nome = document.getElementById("name").value;
        const categoria = document.getElementById("category").value;
        const quantidade = document.getElementById("quantity").value;
        const imagem = document.getElementById("image").value;
        const preco = document.getElementById("price").value;

        const novoProduto = {
            title: nome,
            category: categoria,
            quantity: quantidade,
            image: imagem,
            price: preco
        };

        try {
            const resposta = await fetch("http://localhost:3000/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(novoProduto)
            });

            if (resposta.ok) {
                const produto = await resposta.json();
                console.log("Produto adicionado:", produto);
                buscarProdutos(); // Recarrega a lista de produtos
            } else {
                console.error("Erro ao adicionar produto:", resposta.statusText);
            }
        } catch (erro) {
            console.error("Erro de rede:", erro);
        }
    }

    // Vincula a função addProduct ao formulário
    document.getElementById("form").addEventListener("submit", addProduct);

    buscarProdutos();
});
