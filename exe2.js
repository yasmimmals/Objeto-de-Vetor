let cadastro
let funcionario = []
let gerente = 0
let soma = 0
let media = 0
for (let i = 0; i < 6; i++){
     cadastro = {
        nome: prompt(`Informe o nome do ${i + 1}º funcionário: `),
        cargo: prompt(`Informe o cargo do ${i + 1}º funcionário: `).toLowerCase(),
        salario: Number(prompt(`Informe o valor do salario do ${i + 1}º funcionário: `)),
        tempoServico:Number(prompt(`Informe o tempo de empresa do ${i + 1}º funcionário: `))
    };
    funcionario.push(cadastro);  
}
let maior = funcionario[0]
for(let i=0; i<funcionario.length;i++){
    if (funcionario[i].salario > 5000 && funcionario[i].tempoServico > 5){
        console.log(funcionario[i])
    }
    if(funcionario[i].salario > maior.salario){
        maior = funcionario[i]
    }
    soma += funcionario[i].salario

    if(funcionario[i].cargo == "gerente"){
        gerente++
    }
}
  media = soma / 6

  console.log(`O nome do funcionário com maior salário é: ${maior.nome}`)
  console.log(`A média salárial é: ${media}`)
  console.log(`A quantidade de gerentes são: ${gerente}`)