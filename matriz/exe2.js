let matriz = [];
let somaTotal = 0
let total = 0
vetNome = []
for (let i = 0; i < 4; i++) {
    matriz[i] = [];
    vetNome[i] = prompt(`Digite o nome do ${i + 1}° Vendedor:`);
    for (let j = 0; j < 7; j++) {
        matriz[i][j] = Number(prompt(`Digite o valor de venda do ${vetNome[i]} no ${j + 1} dia da semana:`));

    }
}

for (let i = 0; i < matriz.length; i++) {
    let somaLinha = 0;
    for (let j = 0; j < matriz[i].length; j++) {
        somaLinha += matriz[i][j];
    }
    console.log(`O Valor da soma de vendas do ${i + 1}° vendedor é R$${somaLinha}`)
}

for (let j = 0; j < 7; j++){
    let somaCouluna = 0;
    for (let i = 0; i < 4; i++){
        somaCouluna += matriz[i][j]
    }
    console.log(`O valor total de vendas para o ${j + 1}° dia da semana é R$${somaCouluna}`);
} 

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(`Valor: R$${matriz[i][j]} - Linha ${i + 1}, Coluna ${j + 1}`)
    }
}

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        somaTotal += matriz[i][j];
        total++
        console.log(``)
    }
}

const media = somaTotal / total

console.log(`A média das vendas é R$${media}`)