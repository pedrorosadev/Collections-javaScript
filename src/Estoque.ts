export abstract class Estoque{
    produto:string;
    descricao:string;

    public abstract notaDeVenda(): void;
}