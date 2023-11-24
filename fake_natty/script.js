// Grandes prêmios
const numero_de_grandes_premios = 1

// Total de pilotos
const total_de_pilotos = 3

// Ordem de chegada
let ranking = []

// Total de sistemas de pontuação
const total_de_sistemas_de_pontuacao = 1

// Função responsável por definir quais serão as regras em cada sistema de pontuação
function sistemaDePontuacao1(total_de_pilotos) {

    let maior_numero_de_pontos = 12

    for(let n = 1; n <= total_de_pilotos; n++) {
        if(n <= total_de_pilotos) {
            const quantidade_de_pontos_por_piloto = (maior_numero_de_pontos - 2)

            maior_numero_de_pontos = quantidade_de_pontos_por_piloto

            console.log(quantidade_de_pontos_por_piloto)
        }
    }
}

// Função responsável por gerar o ranking (ordem de chegada)
function gerarRanking(total_de_pilotos) {
    for(let p = 1; p <= total_de_pilotos; p++) {

        const piloto = gerarPiloto(total_de_pilotos)

        ranking.push(piloto)
    }

    return ranking
}

// Função responsável por validar o ranking (ordem de chegado)
function ordemDeChegada(total_de_pilotos) {

    // 1 - Buscar por items duplicados e gerar uma nova lista sem duplicação
    const lista_sem_duplicacao = [...new Set(ranking)]

    // 2 - Colocar o item faltante na última posição
    const novo_piloto = gerarPiloto(total_de_pilotos)

    if(!lista_sem_duplicacao.includes(novo_piloto)) {
        lista_sem_duplicacao.push(novo_piloto)
    }

    console.log(lista_sem_duplicacao)

}

// Função responsável por gerar um piloto
function gerarPiloto(total_de_pilotos) {
    const piloto = Math.floor(Math.random() * total_de_pilotos) + 1
    return piloto
}


gerarRanking(total_de_pilotos)
ordemDeChegada(total_de_pilotos)