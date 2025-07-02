import { FormaPagamento } from "./FormaPagamento";

export class CartaoCredito extends FormaPagamento {
    calcularDesconto(valor: number): number {
        return valor * 0.95;
    }
}