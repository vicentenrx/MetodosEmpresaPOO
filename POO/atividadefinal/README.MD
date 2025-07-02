#  Sistema de Formas de Pagamento (Polimorfismo em TypeScript)

Este projeto demonstra o uso de **polimorfismo** em TypeScript para gerenciar diferentes formas de pagamento em uma loja online. O sistema calcula descontos específicos para cada método de pagamento e destaca informações importantes no terminal usando a biblioteca [chalk](https://www.npmjs.com/package/chalk).

---

##  Como funciona

O usuário informa valores para cada forma de pagamento. O sistema processa cada pagamento, aplicando o desconto correto e exibindo o resultado com **cores chamativas** no terminal:

- **Cartão de Crédito:** desconto de 5% (exibido em amarelo)
- **Boleto:** desconto de 10% (exibido em amarelo)
- **Pix:** desconto de 15% (exibido em amarelo)
- O **valor final** é sempre destacado em **verde** e **negrito**
- Separadores e títulos são destacados em **amarelo** e **negrito**

---

##  Estrutura dos arquivos

- **ClassesPagamentos/FormaPagamento.ts**  
  Classe abstrata base para todas as formas de pagamento. Define o método abstrato `calcularDesconto` e o método `descricao()` que retorna o nome da classe.

- **ClassesPagamentos/CartaoCredito.ts**  
  Subclasse de `FormaPagamento`. Implementa o desconto de 5%.

- **ClassesPagamentos/Boleto.ts**  
  Subclasse de `FormaPagamento`. Implementa o desconto de 10%.

- **ClassesPagamentos/Pix.ts**  
  Subclasse de `FormaPagamento`. Implementa o desconto de 15%.

- **ProcessoPagamento/processarPagamento.ts**  
  Função utilitária que recebe uma forma de pagamento e um valor, exibe o nome da forma de pagamento e o valor final com desconto, usando **cores** para destacar as informações principais.

- **Main/main.ts**  
  Arquivo principal. Solicita ao usuário os valores para cada forma de pagamento, instancia os objetos correspondentes e chama a função de processamento.

---

##  Exemplo de saída colorida

```shell
-----------------------------
Forma de pagamento: CartaoCredito
Valor final com desconto: R$ 95.00 (Caso valor tenha sido 100)
-----------------------------
Forma de pagamento: Boleto
Valor final com desconto: R$ 90.00 (Caso valor tenha sido 100)
-----------------------------
Forma de pagamento: Pix
Valor final com desconto: R$ 85.00 (Caso valor tenha sido 100)
-----------------------------
```
- Os separadores e nomes das formas de pagamento aparecem em **amarelo**.
- O valor final aparece em **verde** e **negrito**.


---

##  Como executar

1. Instale as dependências:
   ```
   npm install
   ```
2. Compile o projeto:
   ```
   npx tsc
   ```
3. Execute o programa:
   ```
   npx ts-node .\Main\main.ts
   ```

---

##  Créditos

Desenvolvido por **Vicente Rochefort**  
Projeto de estudo sobre polimorfismo e boas práticas em TypeScript.
