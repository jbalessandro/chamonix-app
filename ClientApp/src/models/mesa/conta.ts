import { Pedido } from './pedido';
import { ContaConsumo } from './conta-consumo';

export interface Conta {
    pedido: Pedido;
    contaConsumo: ContaConsumo[];
}
