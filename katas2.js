// comece a criar a sua função add na linha abaixo
function add (a, b) {
    let soma = a + b
    return soma
}

// descomente a linha seguinte para testar sua função
console.assert(add(3, 5) === 8, 'A função add não está funcionando como esperado');


// comece a criar a sua função multiply na linha abaixo
function multiply (a, b) {
    let resultado = 0
    let aux = []
    for(let i = 0; i < a; i++) {
        aux.push(resultado += add(b, 0))
    }
    return aux
}
console.log(multiply(4,6))
// descomente a linha seguinte para testar sua função
// console.assert(multiply(4, 6) === 24, 'A função multiply não está funcionando como esperado');


// // comece a criar a sua função power na linha abaixo
function power(x, n) {
    let resultado = 1

    for(let i = 0; i < n; i++){

        resultado = multiply(x, resultado)
    
    }

    return resultado
}


// // descomente a linha seguinte para testar sua função
console.assert(power(3, 4) === 81, 'A função power não está funcionando como esperado');


// comece a criar a sua função factorial na linha abaixo
function factorial(a) {
    let resultado = 1
    for(let i = 1; i < a; i++) {
        resultado += multiply(i, resultado)
    }
    return resultado
}

// descomente a linha seguinte para testar sua função
console.assert(factorial(5) === 120, 'A função factorial não está funcionando como esperado');


/**
 * BONUS (aviso: o grau de dificuldade é bem maior !!!)
 */

// crie a função fibonacci

function fibonacci(a) {
    let anterior = 0
    let atual = 1
    let proximo = 0

    for(let i = 1; i < a; i++) {
        proximo = add(anterior, atual)
        anterior = atual
        atual = proximo
    }
    return proximo
}

console.assert(fibonacci(7) === 13, 'A função fibonacci não está funcionando como esperado');