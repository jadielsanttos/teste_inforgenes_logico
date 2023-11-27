// lista inicial
let lista = [0,1]

// Criar um loop para imprimir os primeiros 40 numeros da sequência de fibonacci
function sequenciaDeFibonacci() {
    for(n=1;n<=40;n++) {

        // Somando o item anterior ao atual
        const soma = lista[n - 1] + lista[n]

        // Atualizando a lista com os números referente a sequência de fibonacci
        lista.push(soma)
    }

    return lista
}

console.log(sequenciaDeFibonacci())