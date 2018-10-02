import { Pedido } from './pedido';
import { FormaPgto } from '../forma-pgto';
import { Usuario } from '../usuario';

export interface PedidoPgto {
    pedidoPgtoId: number;
    pedidoId: number;
    formaPgtoId: number;
    valor: number;
    usuarioId: number;
    ativo: boolean;
    servicoAceito: boolean;
    pedido: Pedido;
    formaPgto: FormaPgto;
    usuario: Usuario;
}
