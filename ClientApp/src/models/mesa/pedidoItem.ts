import { Pedido } from './pedido';

export interface PedidoItem {
  pedidoItemId: number;
  pedidoId: number;
  produtoId: number;
  quantidade: number;
  observacao: string;
  ativo: boolean;
  pedidoPor: number;
  canceladoPor: number;
  pedidoEm: Date;
  preco: number;
  servido: boolean;
  cortesia: boolean;
  pedido: Pedido;
}
