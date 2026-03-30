const express = require('express');
const app = express();
const port = 3000;

// Configuração para aceitar JSON (caso precise depois)
app.use(express.json());

// ======================
// LISTA DE EXERCÍCIOS: OPERADORES EM JAVASCRIPT
// ======================

// ==================== OPERADORES ARITMÉTICOS ====================

// Soma
let num1 = 15;
let num2 = 27;
let soma = num1 + num2;
console.log(`A soma de ${num1} + ${num2} é: ${soma}`);

// Subtração
let subtracao = 50 - 25;
console.log(`Resultado da subtração de 50 - 25: ${subtracao}`);

// Multiplicação
let multiplicacao = 8 * 6;
console.log(`O produto de 8 * 6 é: ${multiplicacao}`);

// Divisão
let divisao = 100 / 4;
console.log(`100 dividido por 4 é: ${divisao}`);

// ==================== OPERADORES DE COMPARAÇÃO ====================

// Igualdade
console.log(`10 é igual a 10? ${10 == 10}`);

// Diferença (com strings)
let nome1 = "Maria";
let nome2 = "João";
console.log(`Os nomes "${nome1}" e "${nome2}" são diferentes? ${nome1 != nome2}`);

// Menor que
console.log(`5 é menor que 10? ${5 < 10}`);

// Maior que
let preco = 65;
console.log(`O preço R$${preco} é maior que 50? ${preco > 50}`);

// Menor ou Igual
let valor = 15;
console.log(`O valor ${valor} é menor ou igual a 20? ${valor <= 20}`);

// Maior ou Igual
let idade = 22;
console.log(`A idade ${idade} é maior ou igual a 18? ${idade >= 18}`);

// ==================== OPERADOR TERNÁRIO ====================

// Atribuição Condicional (Nota)
let nota = 8.5;
let resultado = nota >= 7 ? "Aprovado" : "Reprovado";
console.log(`Com nota ${nota}, o aluno está: ${resultado}`);

// Verificação de Maioridade
let status = idade >= 18 ? "adulto" : "menor";
console.log(`Com ${idade} anos, a pessoa é: ${status}`);

// ==================== TEMPLATE LITERALS ====================

// Placeholder simples
let nome = "Ana";
console.log(`Olá, ${nome}!`);

// Legibilidade com múltiplas variáveis
let produto = "Notebook";
let preço = 2599.90;
let quantidade = 2;
console.log(`Você comprou ${quantidade} unidade(s) de ${produto} por R$${preço.toFixed(2)} cada.`);

// ==================== MENSAGEM PERSONALIZADA COMPLETA ====================

let nomePessoa = "Lucas";
let idadePessoa = 16;

let classificacao = idadePessoa >= 18 ? "adulto" : "menor de idade";

let mensagem = `Olá, ${nomePessoa}! Você tem ${idadePessoa} anos e é considerado ${classificacao}.`;

console.log(mensagem);

// ======================
// ROTAS PARA VISUALIZAR NO PAINEL DA DIREITA
// ======================

// Página principal - Mostra todos os resultados de forma bonita
app.get('/', (req, res) => {
  res.send(`
    <h1>✅ Lista de Exercícios - Operadores em JavaScript</h1>
    <h2>Resultados:</h2>
    <pre>
A soma de ${num1} + ${num2} é: ${soma}
Resultado da subtração de 50 - 25: ${subtracao}
O produto de 8 * 6 é: ${multiplicacao}
100 dividido por 4 é: ${divisao}

10 é igual a 10? ${10 == 10}
Os nomes "${nome1}" e "${nome2}" são diferentes? ${nome1 != nome2}
5 é menor que 10? ${5 < 10}
O preço R$${preco} é maior que 50? ${preco > 50}
O valor ${valor} é menor ou igual a 20? ${valor <= 20}
A idade ${idade} é maior ou igual a 18? ${idade >= 18}

Com nota ${nota}, o aluno está: ${resultado}
Com ${idade} anos, a pessoa é: ${status}

Olá, ${nome}!
Você comprou ${quantidade} unidade(s) de ${produto} por R$${preço.toFixed(2)} cada.

${mensagem}
    </pre>
    <p><strong>Servidor rodando com Express no StackBlitz!</strong></p>
  `);
});

app.listen(port, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${port}`);
});