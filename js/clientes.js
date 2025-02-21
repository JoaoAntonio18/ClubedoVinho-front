const TABLE = document.getElementById('table-clientes');

fetch('https://feitoza.tec.br/api/index.php')
    .then(res => res.json())
    .then(clientes => {
       clientes.forEach(cliente =>  {
        TABLE.innerHTML += `
            <tr>
                <td>${cliente.id}</td>
                <td>${cliente.nome}</td>
                <td>${cliente.email}</td>
                <td>${cliente.telefone}</td>
                <td><img width = 50px src = "${cliente.foto}"></td>
                <td>${cliente.data_cadastro}</td>
                <td>${cliente.data_ultimo_pedido}</td>
            </tr>
            `
       }
    )});
