// Leia os dados de uma matriz 5x5, onde cada elemento representa o índice de poluição registrado em uma 
// determinada região (linha) e em um determinado dia (coluna).

// Os dados devem ser inseridos pelo usuário via prompt(), com validação para aceitar apenas valores entre 
// 0 e 500 (índices válidos de poluição).

// Ao final, o programa deve:

// Exibir todos os valores da diagonal principal e calcular a sua média.

// Exibir todos os valores da diagonal secundária e calcular a sua média.

// Exibir qual região (linha) teve o maior índice de poluição registrado e em qual dia (coluna) isso ocorreu.

// Calcular e exibir quantas i superior a 300 (nível crítico).

// Exibir a região que teve, em média, o menor índice de poluição ao longo dos 5 dias.

let matriz = []

for(let i = 0; i < 5; i++){
    matriz[i] = []
    for(let j = 0; j < 5; j++){
        let valor = Number(prompt(`Informe o indice de poluição do ${j + 1} º dia: `))
        while(valor < 0 || valor > 500 || isNaN(valor)){
            alert('O valores precisam ser entre 0 e 500')
            valor = Number(prompt(`Informe o indice de poluição do ${j + 1} º dia: `))
        }
        matriz[i][j] = valor
    }
}

let diagonalPrincipal = []
let somaDiagonal = 0 

for(let i = 0; i < matriz.length; i++){
    diagonalPrincipal.push(matriz[i][i])
    somaDiagonal += matriz[i][i] 
}

let mediaPrincipal = somaDiagonal / diagonalPrincipal.length
console.log(`Os valores da Diagonal principal são: ${diagonalPrincipal}`)
console.log(`A média da Diagonal principal é: `, mediaPrincipal)

let diagonalSecundaria = []
let somaSecundaria = 0


for(let i = 0; i < matriz.length; i++){
    let j = matriz.length - 1 - i;
    diagonalSecundaria.push(matriz[i][j]);
    somaSecundaria += matriz[i][j];
}

let mediaSecundaria = somaSecundaria / diagonalSecundaria.length
console.log(`Os valores da Diagonal Secundária são: ${diagonalSecundaria}`)
console.log(`A média da Diagonal Secundária é: `, mediaSecundaria)

let maiorPoluicao = matriz[0][0]; 
let regiaoMaiorPoluicao = 1;
let diaMaiorPoluicao = 1;

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        if(matriz[i][j] > maiorPoluicao){
            maiorPoluicao = matriz[i][j];
            regiaoMaiorPoluicao = i + 1;
            diaMaiorPoluicao = j + 1;
        }
    }
}

console.log(`\nO maior índice de poluição registrado foi ${maiorPoluicao}.`);
console.log(`Isso ocorreu na Região ${regiaoMaiorPoluicao}, no ${diaMaiorPoluicao}º dia.`);

let niveisCriticos = 0;

for(let i = 0; i < matriz.length; i++){
    for(let j = 0; j < matriz[i].length; j++){
        if(matriz[i][j] > 300){
            niveisCriticos++;
        }
    }
}

console.log(`\nForam registrados ${niveisCriticos} dias com nível de poluição superior a 300 (nível crítico).`);

let somaPrimeiraLinha = 0;
for(let j = 0; j < matriz[0].length; j++){
    somaPrimeiraLinha += matriz[0][j];
}
let menorMedia = somaPrimeiraLinha / matriz[0].length;
let regiaoMenorMedia = 1;

for(let i = 1; i < matriz.length; i++){
    let somaLinha = 0;
    for(let j = 0; j < matriz[i].length; j++){
        somaLinha += matriz[i][j];
    }
    let mediaLinha = somaLinha / matriz[i].length;

    if(mediaLinha < menorMedia){
        menorMedia = mediaLinha;
        regiaoMenorMedia = i + 1;
    }
}

console.log(`\nA região com o menor índice de poluição médio é a Região ${regiaoMenorMedia}.`);
console.log(`A média de poluição desta região foi de ${menorMedia}.`);