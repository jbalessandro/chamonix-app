import { Cargo } from './cargo';

export interface Usuario {
    usuarioId: number;
    cargoId: number;
    nome: string;
    telefone: string;
    ativo: boolean;
    cargo: Cargo;
}
