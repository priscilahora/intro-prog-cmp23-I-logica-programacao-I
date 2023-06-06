O que são variáveis?
Variáveis são espaços na memória do computador que armazenam valores. Elas têm um nome e um tipo de dado associado. O nome da variável é usado para referenciá-la e acessar o valor armazenado. O tipo de dado determina que tipo de valor pode ser armazenado na variável, como números, textos, booleanos, entre outros.

Declarando variáveis
Em JavaScript, podemos declarar variáveis utilizando as palavras-chave var, let ou const. A diferença entre elas está na forma como a variável pode ser utilizada e se o seu valor pode ser alterado posteriormente.

var
A palavra-chave var foi amplamente utilizada em versões anteriores do JavaScript para declarar variáveis. No entanto, a partir do ECMAScript 6 (ES6), foram introduzidas as palavras-chave let e const, que fornecem uma forma mais consistente e segura de declarar variáveis.

javascript
Copy code
var idade;
let
A palavra-chave let é usada para declarar variáveis que podem ser alteradas posteriormente. Elas possuem um escopo de bloco, o que significa que estão acessíveis apenas dentro do bloco em que foram declaradas.

javascript
Copy code
let idade;
const
A palavra-chave const é usada para declarar variáveis cujo valor é constante, ou seja, não pode ser alterado após a atribuição inicial. Assim como o let, as variáveis declaradas com const também possuem escopo de bloco.

javascript
Copy code
const PI = 3.14;
Atribuindo valores às variáveis
Após declarar uma variável, podemos atribuir um valor a ela utilizando o operador de atribuição (=).

javascript
Copy code
let idade;
idade = 25;
Também é possível fazer a declaração e atribuição em uma única linha:

javascript
Copy code
let idade = 25;
Utilizando variáveis
As variáveis são úteis porque podemos manipular seus valores e utilizá-los em diferentes partes do programa. Podemos fazer cálculos com as variáveis, exibir seus valores na tela, armazenar resultados intermediários, entre outras coisas.

Vamos ver um exemplo simples em JavaScript, onde calculamos a área de um retângulo com base em valores fornecidos pelo usuário:

```
let largura = parseFloat(prompt("Digite a largura: "));
let altura = parseFloat(prompt("Digite a altura: "));

let area = largura * altura;

```

console.log("A área do retângulo é: " + area);
Nesse exemplo, declaramos as variáveis largura e altura e atribuímos valores a elas utilizando a função parseFloat para converter os valores fornecidos pelo usuário em números decimais. Em seguida, calculamos a área do retângulo multiplicando as variáveis. Por fim, utilizamos a função console.log para exibir o resultado na saída do console.