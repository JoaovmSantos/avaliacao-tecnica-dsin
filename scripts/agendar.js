function agendar() {
    const cliente = $('#cliente').val();
    const servicos = $('#servicos').val();
    const data = $('#data').val();
    const horario = $('#horario').val();

    if (!cliente || !servicos || !data || !horario) {
        alert('Preencha todos os campos.');
        return;
    }

    // Obter agendamentos existentes
    const agendamentos = JSON.parse(localStorage.getItem('agendamentos')) || [];

    // Verificar se o horário já está agendado
    const horarioJaAgendado = agendamentos.some(agendamento => agendamento.data === data && agendamento.horario === horario);

    if (horarioJaAgendado) {
        alert('O horário já está reservado. Escolha outro horário.');
        return;
    }

    const agendamento = {
        cliente,
        servicos,
        data,
        horario
    };

    // Armazenar no armazenamento local
    agendamentos.push(agendamento);
    localStorage.setItem('agendamentos', JSON.stringify(agendamentos));

    exibirClientesAgendados(); // Atualiza a exibição imediatamente

    $('#cliente').val('');
    $('#servicos').val('');
    $('#data').val('');
    $('#horario').val('');
}
