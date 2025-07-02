"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartaoCredito = void 0;
const FormaPagamento_1 = require("./FormaPagamento");
class CartaoCredito extends FormaPagamento_1.FormaPagamento {
    calcularDesconto(valor) {
        return valor * 0.95;
    }
}
exports.CartaoCredito = CartaoCredito;
