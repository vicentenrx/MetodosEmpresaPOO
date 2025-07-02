export abstract class FormaPagamento {
    abstract calcularDesconto(valor: number): number;

    descricao(): string {
        return this.constructor.name;
    }
}