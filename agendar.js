function agendar() {
    // Obter valores do formulário
    const cliente = $('#cliente').val();
    const servicos = $('#servicos').val();
    const data = $('#data').val();
    const horario = $('#horario').val();

    // Validar se os campos foram preenchidos
    if (!cliente || !servicos || !data || !horario) {
        alert('Preencha todos os campos.');
        return;
    }

    // Criar novo agendamento
    const agendamento = {
        cliente,
        servicos,
        data,
        horario
    };

    // Adicionar agendamento à lista de histórico
    $('#historico').append(`
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Cliente: <box-icon name='user'></box-icon> ${cliente}</h5>
                <p class="card-text">Serviço: <box-icon name='cut' ></box-icon> ${servicos}</p>
                <p class="card-text">Dia e Hora: </br> <box-icon type='regular' name='calendar'></box-icon> ${data} <box-icon name='time'></box-icon> ${horario}</p>
            </div>
        </div>
    `);

    $('#cliente').val('');
    $('#servicos').val('');
    $('#data').val('');
    $('#horario').val('');
}