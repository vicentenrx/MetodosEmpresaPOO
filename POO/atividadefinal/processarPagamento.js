"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processarPagamento = processarPagamento;
const chalk_1 = __importDefault(require("chalk"));
function processarPagamento(pagamento, valor) {
    console.log(chalk_1.default.yellow.bold('-----------------------------'));
    console.log(chalk_1.default.bold(`Forma de pagamento: ${chalk_1.default.yellow(pagamento.descricao())}`));
    console.log(chalk_1.default.bold(`Valor final com desconto: ${chalk_1.default.green(`R$ ${pagamento.calcularDesconto(valor).toFixed(2)}`)}`));
    console.log(chalk_1.default.yellow.bold('-----------------------------'));
}
