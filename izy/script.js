// array de numeros inicialmente vazio
let numeros = []

// Criando lista de números dinamicamente
function adicionaNumeros() {
    for(n=1;n<=50;n++) {
        numeros.push(n)
    }
    
    return verificaValores()
}

function verificaValores() {
    // Fazendo loop para verificar item por item e atribuir o valor dos multiplos de forma dinâmica
    for(let numero in numeros) {

        const multiplo_de_3 = (numero++) * 3
        const multiplo_de_5 = (numero++) * 5
        
        // Substituindo multiplos de 3 pela string (Fizz)
        if(multiplo_de_3 <= numeros.length) {
            const index = multiplo_de_3 + 2

            // Evitando a impressão em excesso
            if(index !== -1 && index < numeros.length) {
                numeros[index] = 'Fizz'
            }
        }

        // Substituindo multiplos de 5 pela string (Buzz)
        if(multiplo_de_5 <= numeros.length) {
            const index = multiplo_de_5 - 1

            // Evitando a impressão em excesso
            if(index !== -1 && index < numeros.length) {
                numeros[index] = 'Buzz'
            }
        }

        // Substituindo os multiplos de ambos pela string (FizzBuzz)
    }

    return numeros

}

function obterMultiploDeAmbos() {
    let primeiro_item = 18
    let proximo_item = 19

    const lista_inversa = numeros.reverse()
    const lista_atualizada = lista_inversa.filter((item) => item !== "Fizz" && item !== "Buzz")
    const quantidade_de_items = lista_atualizada.length - primeiro_item

    for(i=1;i<=quantidade_de_items;i++) {
        const resto_da_divisao = lista_atualizada[primeiro_item] % lista_atualizada[proximo_item]

        if(i <= quantidade_de_items && resto_da_divisao == 0) {
            console.log("FizzBuzz")
        }

        proximo_item++
    }

}

console.log(adicionaNumeros())

obterMultiploDeAmbos()
