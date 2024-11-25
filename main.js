$(document).ready(function() {
    const NomeTarefa = $('#nome-tarefa');
    const AdicionarTarefa = $('#botao-adicionar');
    const Lista = $('.lista-tarefas');
    let tarefas = [];

    AdicionarTarefa.on('click', function(event) {
        event.preventDefault();
        const novaTarefa = NomeTarefa.val().trim();

        if (novaTarefa === '') {
            alert('Digite uma tarefa!');
            return;
        }

        if (tarefas.includes(novaTarefa)) {
            alert('Esta tarefa já foi adicionada!');
            return;
        }

        tarefas.push(novaTarefa);

        const itemLista = $('<li></li>').text(novaTarefa);

        itemLista.on('click', function() {
            const decoracaoAtual = $(this).css('text-decoration');
            if (decoracaoAtual.includes('line-through')) {
                $(this).css('text-decoration', 'none'); 
            } else {
                $(this).css('text-decoration', 'line-through'); 
        });

        Lista.append(itemLista);
        NomeTarefa.val('');
    });
});
