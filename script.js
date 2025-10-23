let saldo = 0;

function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function adicionarTransacao() {
    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);

    if (descricao === '' || isNaN(valor)) {
        alert('Preencha a descrição e o valor corretamente!');
        return;
    }

    // Atualiza o saldo
    saldo += valor;
    document.getElementById('valor-saldo').textContent = formatarMoeda(saldo);

    // Adiciona ao histórico
    const historico = document.getElementById('historico');
    const item = document.createElement('li');
    item.textContent = `${descricao}: ${formatarMoeda(valor)}`;
    historico.appendChild(item);

    // Limpa os campos
    document.getElementById('descricao').value = '';
    document.getElementById('valor').value = '';
}
