import { Mesa } from '../mesa';

export interface Pedido {
    pedidoId: number;
    mesaId: number;
    inicio: Date;
    termino?: Date;
    abertaPor: number;
    fechadaPor?: number;
    clientes: number;
    consumo: number;
    servico: number;
    total: number;
    pago: number;
    mesa: Mesa;
    servicoAceito: boolean;
}
