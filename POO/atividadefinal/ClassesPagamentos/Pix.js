"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pix = void 0;
const FormaPagamento_1 = require("./FormaPagamento");
class Pix extends FormaPagamento_1.FormaPagamento {
    calcularDesconto(valor) {
        return valor * 0.85;
    }
}
exports.Pix = Pix;
