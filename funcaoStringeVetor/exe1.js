let palavra = prompt("Informe uma palavra: ")
let limpa = palavra.trim().split("").reverse().join("")

if(limpa === palavra){
    alert("São palindromas")
}else{
    alert("Não são palindromas")
}