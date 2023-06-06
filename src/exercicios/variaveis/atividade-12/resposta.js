let precoOriginal = 100.00;
let porcentagemDesconto = 0.30;

let valorDesconto = precoOriginal * porcentagemDesconto;

let valorComDesconto = precoOriginal - valorDesconto;

console.log(`O preço final do produto, com desconto, é de R$${valorComDesconto.toFixed(2)}`)
