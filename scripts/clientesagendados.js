function exibirClientesAgendados() {
    const historicoElement = document.getElementById('historico');
    historicoElement.innerHTML = ''; 

    const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];

    agendamentos.forEach((agendamento, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'col-md-4 mb-3';

        const dataFormatada = new Date(agendamento.data).toLocaleDateString('pt-BR');

        cardElement.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Cliente: ${agendamento.cliente}</h5>
                    <p class="card-text">Serviço: ${agendamento.servicos}</p>
                    <p class="card-text">Data e Horário: ${dataFormatada} ${agendamento.horario}</p>
                    <button class="btn btn-danger" onclick="cancelarAgendamento(${index})">cancelar</button>
                    <button class="btn btn-success" onclick="marcarRealizado(${index})">Feito</button>
                </div>
            </div>
        `;

        historicoElement.appendChild(cardElement);
    });
}

function cancelarAgendamento(index) {
    const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    agendamentos.splice(index, 1);
    localStorage.setItem('agendamentos', JSON.stringify(agendamentos));
    exibirClientesAgendados(); // Atualiza a exibição imediatamente
}

function marcarRealizado(index) {
    const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];
    agendamentos[index].realizado = true;
    localStorage.setItem('agendamentos', JSON.stringify(agendamentos));
    exibirClientesAgendados(); // Atualiza a exibição imediatamente
}

//Exibe os clientes já agendados quando a página é carregada
document.addEventListener('DOMContentLoaded', exibirClientesAgendados);

function recarregarPagina() {
    location.reload(); // Recarrega a página
}

document.addEventListener('DOMContentLoaded', () => {
    exibirClientesAgendados();

    // Adicionar ouvinte de eventos para novo agendamento
    document.addEventListener('novoAgendamento', () => {
        exibirClientesAgendados();
    });

    // A página será automaticamente recarregada a cada 30 segundos
    setInterval(recarregarPagina, 30000);
});