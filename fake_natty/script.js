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

    let dados_do_sistema_de_pontuacao = {
        "ultima_posicao_a_receber_pontos": 3,
        "quantidade_de_pontos_por_piloto": []
    }

    let maior_numero_de_pontos = 12

    for(let n = 1; n <= total_de_pilotos; n++) {
        if(n <= total_de_pilotos) {
            const quantidade_de_pontos_por_piloto = (maior_numero_de_pontos - 2)

            dados_do_sistema_de_pontuacao.quantidade_de_pontos_por_piloto.push(maior_numero_de_pontos = quantidade_de_pontos_por_piloto)
        }
    }

    return dados_do_sistema_de_pontuacao
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

    return lista_sem_duplicacao
}

// Função responsável por gerar um piloto
function gerarPiloto(total_de_pilotos) {
    const piloto = Math.floor(Math.random() * total_de_pilotos) + 1
    return piloto
}

// Função responsável por declarar o campeão ou os campeões da corrida
function declararVencedores() {
    let campeao = 0
    // 1 - Simular uma corrida
    const resultado_da_corrida = ordemDeChegada(total_de_pilotos) 

    // 2 - Calcular o número total de pontos por piloto
    const tabela_de_pontos = sistemaDePontuacao1(total_de_pilotos).quantidade_de_pontos_por_piloto

    for(let n in tabela_de_pontos) {

        // 3 - Comparar os indíces dos 2 arrays (tabela de pontos) e (resultado da corrida) para identificar o campeão
        for(let p in resultado_da_corrida) {
            if(n == p) {
                const piloto = resultado_da_corrida[p]
                const pontos_por_piloto = tabela_de_pontos[n]

                if(pontos_por_piloto == 10) {
                    campeao = piloto
                }
            }
        }
    }

    return campeao
}

// Entrada
console.log("!! ENTRADA !!")

// Primeira linha
console.log(`${numero_de_grandes_premios} ${total_de_pilotos}`)

// Segunda linha
gerarRanking(total_de_pilotos)
console.log(ordemDeChegada(total_de_pilotos).toString().replace(/,/g, " "))

// Terceira linha
console.log(total_de_sistemas_de_pontuacao.toString())

// Tabela de pontuação
console.log(`${sistemaDePontuacao1(total_de_pilotos).ultima_posicao_a_receber_pontos} ${sistemaDePontuacao1(total_de_pilotos).quantidade_de_pontos_por_piloto.toString().replace(/,/g, " ")}`)

// Saída
console.log("!! SAÍDA !!")
console.log(`O piloto ${declararVencedores()} é o campeão`)