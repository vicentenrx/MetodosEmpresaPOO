import { FormaPagamento } from "./FormaPagamento";

export class Pix extends FormaPagamento {
    calcularDesconto(valor: number): number {
        return valor * 0.85;
    }
}