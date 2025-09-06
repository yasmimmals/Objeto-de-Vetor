 // cria os vetores e adiciona os valores
let regiao = []
let dias = []
for(let i=0;i<5;i++){
    regiao.push(prompt(`Informe o nome da região: ${i+1}`))
}
for(let i=0;i<5;i++){
    dias.push(Number(prompt(`Informe o dia: ${i+1}`)))
}
// cria a matriz e adiciona os niveis de poluição
let poluicao = [] // matriz
for(let i=0; i<5; i++){
    poluicao[i] = [] // cria vetor dentro do vetor
    for(let j=0;j<5;j++){
        poluicao[i][j] = parseInt(Math.random() * 501)// cria números aleatórios até 500
    }
}
// exibir valores da diagonal principal e sua média
let somaDP = 0
for(let i=0; i<poluicao.length; i++){
    console.log(`Elemento da diagonal principal ${poluicao[i][i]}`)
    somaDP += poluicao[i][i]
}
console.log(`A média da Diagonal Principal é ${somaDP/poluicao.length}`)
// exibir os valores da diagonal secundaria e sua média
let somaDS = 0
for(let i=0; i<poluicao.length; i++){
    console.log(`Elemento da diagonal secundária ${poluicao[i][4 - i]}`)
    somaDS += poluicao[i][4 - i]
}
console.log(`A média da Diagonal Secundária é ${somaDS/poluicao.length}`)
// Exibir qual região (linha) teve o maior índice de poluição registrado e em qual dia (coluna) isso ocorreu.
let iMaior = 0; let jMaior = 0; let maior = poluicao[0][0]
for(let i=0; i<5; i++){
    for(let j=0; j<5; j++){
        if (poluicao[i][j] > maior){
            maior = poluicao[i][j]
            iMaior = i; jMaior = j
        }
    }
}
console.log(`O nivel ${maior} ocorreu na região ${regiao[iMaior]} no dia ${dias[jMaior]}`)
// Calcular e exibir quantas vezes i superior a 300 (nível crítico).
let qtdNivelCritico = 0
for(let i=0; i<5; i++){
    for(let j=0; j<5; j++){
        if(poluicao[i][i] > 300){
            qtdNivelCritico++
        }
    }
}
console.log(`Quantidade de niveis criticos ${qtdNivelCritico}`)

// Exibir a reguião que teve, em média o menor indice de poluição ao longo dos 5 dias.
let medias = []
let somaLinhas
for(let i=0;i<poluicao.length;i++){
    somaLinhas = 0 // linha nova temos que zerar a soma
    for(let j=0;j<poluicao.length;j++){
        somaLinhas += poluicao[i][j]
    }
    // colocar no vetor
    medias[i] = somaLinhas / poluicao.length
}
let menor = medias[0]
let posMenor = 0
for(let i=0; i< medias.length; i++){
    if (medias[i] < menor){
        menor = medias[i]
        posMenor = 1
    }
}
console.log(`A região com menor média ${menor} foi ${regiao[posMenor]}`)