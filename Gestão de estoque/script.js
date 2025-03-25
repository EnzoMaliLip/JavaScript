const formFuncionario = document.getElementById('form-funcionario');
const listaFuncionarios = document.querySelector('#lista-funcionarios ul');

formFuncionario.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const cargo = document.getElementById('cargo').value;
    const id = document.getElementById('id').value;

    
    const funcionario = { nome, cargo, id };

    
    let funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];
    funcionarios.push(funcionario);
    localStorage.setItem('funcionarios', JSON.stringify(funcionarios));

    
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = `${nome} - ${cargo} (ID: ${id})`;
    listaFuncionarios.appendChild(li);

    
    formFuncionario.reset();
});


window.addEventListener('load', () => {
    const funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];
    funcionarios.forEach(funcionario => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = `${funcionario.nome} - ${funcionario.cargo} (ID: ${funcionario.id})`;
        listaFuncionarios.appendChild(li);
    });
});


const formProduto = document.getElementById('form-produto');
const listaProdutos = document.querySelector('#lista-produtos ul');

formProduto.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const nomeProduto = document.getElementById('nome-produto').value;
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const preco = parseFloat(document.getElementById('preco').value);

    
    const produto = { nomeProduto, quantidade, preco };

    
    let produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos.push(produto);
    localStorage.setItem('produtos', JSON.stringify(produtos));

    
    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.textContent = `${nomeProduto} - Quantidade: ${quantidade} - Preço: R$ ${preco.toFixed(2)}`;
    listaProdutos.appendChild(li);

    
    formProduto.reset();
});


window.addEventListener('load', () => {
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos.forEach(produto => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = `${produto.nomeProduto} - Quantidade: ${produto.quantidade} - Preço: R$ ${produto.preco.toFixed(2)}`;
        listaProdutos.appendChild(li);
    });
});


const formVenda = document.getElementById('form-venda');
const funcionarioVendaSelect = document.getElementById('funcionario-venda');
const produtoVendaSelect = document.getElementById('produto-venda');


window.addEventListener('load', () => {
    const funcionarios = JSON.parse(localStorage.getItem('funcionarios')) || [];
    funcionarios.forEach(funcionario => {
        const option = document.createElement('option');
        option.value = funcionario.id;
        option.text = `${funcionario.nome} (ID: ${funcionario.id})`;
        funcionarioVendaSelect.appendChild(option);
    });

   
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    produtos.forEach(produto => {
        const option = document.createElement('option');
        option.value = produto.nomeProduto;
        option.text = produto.nomeProduto;
        produtoVendaSelect.appendChild(option);
    });
});

formVenda.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const funcionarioId = parseInt(funcionarioVendaSelect.value);
    const produtoNome = produtoVendaSelect.value;
    const quantidadeVendida = parseInt(document.getElementById('quantidade-venda').value);

    
    const produtos = JSON.parse(localStorage.getItem('produtos')) || [];
    const produto = produtos.find(p => p.nomeProduto === produtoNome);
    if (!produto) {
        alert('Produto não encontrado!');
        return;
    }
    if (produto.quantidade < quantidadeVendida) {
        alert('Estoque insuficiente!');
        return;
    }

    
    produto.quantidade -= quantidadeVendida;
    localStorage.setItem('produtos', JSON.stringify(produtos));

    
    const listaProdutos = document.querySelector('#lista-produtos ul');
    listaProdutos.innerHTML = ''; // Limpa a lista
    produtos.forEach(produto => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = `${produto.nomeProduto} - Quantidade: ${produto.quantidade} - Preço: R$ ${produto.preco.toFixed(2)}`;
        listaProdutos.appendChild(li);
    });

 
    formVenda.reset();
});