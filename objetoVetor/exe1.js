function lerDadosDoLivro(numeroDoLivro) {

    const titulo = prompt(`Digite o título do livro
   ${numeroDoLivro}:`);
    const autor = prompt(`Digite o autor do livro ${numeroDoLivro}:`);
   
    let ano;
    while (true) {
    const anoInput = prompt(`Digite o ano de publicação do livro
   ${numeroDoLivro}:`);
    ano = parseInt(anoInput);
    if (!isNaN(ano) && ano > 0) {
    break;
    }
    alert("Ano inválido. Por favor, digite um número.");
    }
   
    let quantidadePaginas;
    while (true) {
    const paginasInput = prompt(`Digite a quantidade de páginas do
   livro ${numeroDoLivro}:`);
    quantidadePaginas = parseInt(paginasInput);
    if (!isNaN(quantidadePaginas) && quantidadePaginas > 0) {
    break;
    }
    alert("Quantidade de páginas inválida. Por favor, digite um número.");
    }
   
    return { titulo, autor, ano, quantidadePaginas };
   }
   const livros = [];
   const TOTAL_LIVROS = 5;
   for (let i = 1; i <= TOTAL_LIVROS; i++) {
    console.log(`Coletando dados do livro ${i} de ${TOTAL_LIVROS}...`);
    const novoLivro = lerDadosDoLivro(i);
    livros.push(novoLivro);
}
console.log("\n--- Análise dos Livros Concluída ---");
const livrosComMaisDe300Paginas = livros.filter(livro =>
livro.quantidadePaginas > 300);
console.log("\n Livros com mais de 300 páginas:");
if (livrosComMaisDe300Paginas.length > 0) {
 livrosComMaisDe300Paginas.forEach(livro => {
 console.log(`- ${livro.titulo} (${livro.quantidadePaginas}
páginas)`);
 });
} else {
 console.log("Nenhum livro encontrado com mais de 300 páginas.");
}
const livroComMaisPaginas = livros.reduce((livroA, livroB) => {
 return livroB.quantidadePaginas > livroA.quantidadePaginas ? livroB
: livroA;
});
console.log(`- ${livroComMaisPaginas.titulo}
(${livroComMaisPaginas.quantidadePaginas} páginas)`);
const totalDePaginas = livros.reduce((soma, livro) => soma +
livro.quantidadePaginas, 0);
const mediaDePaginas = totalDePaginas / livros.length;
console.log(`- A média de páginas é: ${mediaDePaginas.toFixed(2)}`);