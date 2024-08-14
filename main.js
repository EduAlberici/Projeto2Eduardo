const form = document.getElementById ('form-contatos');
const contatos = [];
const telefone = [];
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaTotalNumeros();
}
);

function adicionaLinha() {
    const inputNomeAgenda = document.getElementById('nome-agenda');
    const inputNumeroAgenda = document.getElementById('numero-agenda');

    if(contatos.includes(inputNomeAgenda.value)){
        alert(`O nome: ${inputNomeAgenda.value} ja foi inserido.`);
    }else {
        contatos.push(inputNomeAgenda.value);
        telefone.push(parseFloat(inputNumeroAgenda.value));

        let linha = '<tr>';
        linha += `<td>${inputNomeAgenda.value}</td>`;
        linha += `<td>${inputNumeroAgenda.value}</td>`;
        linha += `</tr>`;

        linhas += linha
    }
    inputNomeAgenda.value = '';
    inputNumeroAgenda.value = '';
    
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaTotalNumeros() {
    const totalDeNumeros = telefone.length;
    document.getElementById('total-de-numeros').textContent = totalDeNumeros;
}