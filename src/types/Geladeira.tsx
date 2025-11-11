export interface Geladeira {
    nome: string;
    descricao: string;
    id: string | undefined;
    categorias: string[];
    imagens: string[];
    preco: number;
}