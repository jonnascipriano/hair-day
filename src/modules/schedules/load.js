import { hoursLoad } from "../form/hours.load.js"

// Seleciona o input de data.
const selectedDate = document.getElementById('date')

export function schedulesDays(){
    // Obtém a data do input
    const date = selectedDate.value

    // Busca na API os agendamentos para carregar do lado direito da tela.
    // Renderiza as horas disponíveis.
    hoursLoad({date})


    // Os horários disponíveis (horário futuro + não agendado) do lado esquerdo (form)
}