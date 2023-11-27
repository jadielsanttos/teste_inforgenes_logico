// Grandes prêmios
const numero_de_grandes_premios = 1

// Total de pilotos
const total_de_pilotos = 3

// Ordem de chegada
let ranking = []

// Total de sistemas de pontuação
const total_de_sistemas_de_pontuacao = 1

// Última linha
const ultima_linha = [0,0]

// Função responsável por definir quais serão as regras em cada sistema de pontuação
function sistemaDePontuacao(total_de_pilotos) {

    // Objeto responsável por armazenar dados de um sistema de pontuação
    let dados_do_sistema_de_pontuacao = {
        "sistema_de_pontuacao": 1,
        "ultima_posicao_a_receber_pontos": 3,
        "quantidade_de_pontos_por_piloto": []
    }

    let maior_numero_de_pontos = 12
    let quantidade_de_pontos_por_piloto = 0

    for(let n = 1; n <= total_de_pilotos; n++) {
        if(n <= total_de_pilotos) {

            // Verificando o sistema de pontuação para atribuir valores diferentes para a variável (quantidade_de_pontos_por_piloto)
            if(dados_do_sistema_de_pontuacao.sistema_de_pontuacao == 1) {
                quantidade_de_pontos_por_piloto = (maior_numero_de_pontos - 2)
            }else if(dados_do_sistema_de_pontuacao.sistema_de_pontuacao == 2) {
                quantidade_de_pontos_por_piloto = 1
            }

            // Quando o n for maior que a última posição a receber pontos, a total de pontos por piloto será 0
            if(n > dados_do_sistema_de_pontuacao.ultima_posicao_a_receber_pontos) {
                quantidade_de_pontos_por_piloto = 0
            }

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

    // Buscando por items duplicados e gerar uma nova lista sem duplicação
    const lista_sem_duplicacao = [...new Set(ranking)]

    // Colocando o item faltante
    const novo_piloto = gerarPiloto(total_de_pilotos)

    // Verificando se na lista ja possui o piloto gerado
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

    // Objeto responsável por armazenar dados do resultado da corrida
    let resultado_da_corrida = {
        "resultado": '',
        "vencedores": []
    }

    // Simular uma corrida
    const ordem_de_chegada = ordemDeChegada(total_de_pilotos) 

    // Calcular o número total de pontos por piloto
    const tabela_de_pontos = sistemaDePontuacao(total_de_pilotos).quantidade_de_pontos_por_piloto

    for(let n in tabela_de_pontos) {

        // Comparar os indíces dos 2 arrays (tabela de pontos) e (resultado da corrida) para identificar o campeão
        for(let p in ordem_de_chegada) {
            if(n == p) {
                const piloto = ordem_de_chegada[p]
                const pontos_por_piloto = tabela_de_pontos[n]

                // Verificando quantidade de pontos por piloto para gerar o resultado
                if(pontos_por_piloto == 10) {

                    resultado_da_corrida.resultado = 'Único ganhador'
                    resultado_da_corrida.vencedores.push(piloto)

                }else if(pontos_por_piloto == 1) {

                    resultado_da_corrida.resultado = 'Empate'
                    resultado_da_corrida.vencedores.push(piloto)
                }
            }
        }
    }

    return resultado_da_corrida
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
console.log(`${sistemaDePontuacao(total_de_pilotos).ultima_posicao_a_receber_pontos} ${sistemaDePontuacao(total_de_pilotos).quantidade_de_pontos_por_piloto.toString().replace(/,/g, " ")}`)

// Última linha
console.log(ultima_linha.toString().replace(/,/g, " "))

// Saída
console.log("!! SAÍDA !!")
console.log(`Resultado: ${declararVencedores().resultado}`)
console.log(`ID dos vencedores: ${declararVencedores().vencedores.sort((a, b) => a - b).toString().replace(/,/g, " ")}`)