import { FormaPagamento } from "../ClassesPagamentos/FormaPagamento";
import chalk from "chalk";
export function processarPagamento(pagamento: FormaPagamento, valor: number): void {
    console.log(chalk.yellow.bold('-----------------------------'));
    console.log(chalk.bold(`Forma de pagamento: ${chalk.yellow(pagamento.descricao())}`));
    console.log(chalk.bold(`Valor final com desconto: ${chalk.green(`R$ ${pagamento.calcularDesconto(valor).toFixed(2)}`)}`));
    console.log(chalk.yellow.bold('-----------------------------'));
}