// Listas inicialmente vazias
let lista_principal = []
let lista_multiplos_de_3 = []
let lista_multiplos_de_5 = []
let lista_multiplos_de_ambos = []

// 1 - Preenchendo lista principal com números de 1 a 50
function gerarListaPrincipal() {
    for(n=1;n<=50;n++) {
        lista_principal.push(n)
    }

    return lista_principal
}

// 2 - Preenchendo lista somente com os números múltiplos de 3
function gerarListaMultiplosDe3() {

    for(n=1;n<=lista_principal.length;n++) {

        const multiplo_de_3 = 3 * n

        if(multiplo_de_3 < lista_principal.length) {
            lista_multiplos_de_3.push(multiplo_de_3)
        }
    }

    return lista_multiplos_de_3
}

// 3 - Preenchendo lista somente com os números múltiplos de 5
function gerarListaMultiplosDe5() {

    for(n=1;n<=lista_principal.length;n++) {

        const multiplo_de_5 = 5 * n

        if(multiplo_de_5 <= lista_principal.length) {
            lista_multiplos_de_5.push(multiplo_de_5)
        }
    }

    return lista_multiplos_de_5
}

// 4 - Preenchendo lista somente com os números múltiplos de ambos
function gerarListaMultiplosDeAmbos() {
    for(n=1;n<=lista_principal.length;n++) {

        const resto_da_divisao_1 = n % 3
        const resto_da_divisao_2 = n % 5
        
        if(resto_da_divisao_1 == 0 && resto_da_divisao_2 == 0) {
            lista_multiplos_de_ambos.push(n)
        }
    }

    return lista_multiplos_de_ambos
}

// 5 - Comparando as listas e gerando a lista final atualizada
function gerarListaFinal() {
    // Substituindo multiplos de ambos pela palavra (FizBuzz)
    const lista_multiplos_de_ambos = gerarListaMultiplosDeAmbos()

    for(let item in lista_multiplos_de_ambos) {
        const item_lista_multiplos_de_ambos = lista_multiplos_de_ambos[item]

        lista_principal.forEach((item) => {
            if(item == item_lista_multiplos_de_ambos) {
                const index = lista_principal.indexOf(item)

                if(item == item_lista_multiplos_de_ambos && item == item_lista_multiplos_de_ambos && item == item_lista_multiplos_de_ambos) {
                    lista_principal[index] = 'FizzBuzz'
                }
            }
        })
    }

    // Substituindo multiplos de 5 pela palavra (Buzz)
    const lista_multiplos_de_5 = gerarListaMultiplosDe5()

    for(let item in lista_multiplos_de_5) {
        const item_lista_multiplos_de_5 = lista_multiplos_de_5[item]

        lista_principal.forEach((item) => {
            if(item == item_lista_multiplos_de_5) {
                const index = lista_principal.indexOf(item)

                lista_principal[index] = 'Buzz'
            }
        })
    }


    // Substituindo multiplos de 3 pela palavra (Fizz)
    const lista_multiplos_de_3 = gerarListaMultiplosDe3()

    for(let item in lista_multiplos_de_3) {
        const item_lista_multiplos_de_3 = lista_multiplos_de_3[item]

        lista_principal.forEach((item) => {
            if(item == item_lista_multiplos_de_3) {
                const index = lista_principal.indexOf(item)

                lista_principal[index] = 'Fizz'
            }
        })
    }

    console.log(lista_principal)
}

gerarListaPrincipal()
gerarListaMultiplosDe3()
gerarListaMultiplosDe5()
gerarListaMultiplosDeAmbos()
console.log(gerarListaFinal())