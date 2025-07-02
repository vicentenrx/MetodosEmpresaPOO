"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Boleto = void 0;
const FormaPagamento_1 = require("./FormaPagamento");
class Boleto extends FormaPagamento_1.FormaPagamento {
    calcularDesconto(valor) {
        return valor * 0.90;
    }
}
exports.Boleto = Boleto;
