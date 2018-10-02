import { Categoria } from './categoria';

export interface Produto {
    produtoId: number;
    categoriaId: number;
    descricao: string;
    detalhe: string;
    valorVenda: number;
    ativo: boolean;
    controleEstoque: boolean;
    estoque: number;
    categoria: Categoria;
}