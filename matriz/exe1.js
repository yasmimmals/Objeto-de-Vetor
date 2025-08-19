let matriz = []
let soma = 0;
let qtdPares = 0
let dig = []
for (let i = 0; i < 3; i++){
    matriz[i] = []
    for (let j = 0 ; j < 3; j++ ){
        matriz[i][j] = parseInt(Math.random() * 10)
    }
}
for (let i = 0; i < 3; i++){
    for (let j = 0; j < 3; j++){
        soma += matriz[i][j]
        if(matriz[i][j] % 2 == 0){
            qtdPares++
            
        }
    }
    dig.push(matriz[i][2 - i])
}


console.log("Soma total: ", soma)
console.log("A quantidade de números pares é: ", qtdPares)
console.log("Os valores da diagonal segundária é: ", qtdPares)



