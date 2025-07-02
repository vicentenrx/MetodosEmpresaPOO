import { FormaPagamento } from "./FormaPagamento";

export class Boleto extends FormaPagamento {
    calcularDesconto(valor: number): number {
        return valor * 0.90;
    }
}