export interface MesaPosicao {
    mesaId: number;
    descricao: string;
    disponivel: boolean;
    lugares: number;
    ativo: boolean;
    inicio?: Date;
    clientes: number;
    pedidoId: number;
}
