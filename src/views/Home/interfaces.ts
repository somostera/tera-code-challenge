import { IMySelectOpcao } from '@/components/MySelect/interfaces';

export interface IFiltroTela{
    porNome: string;
    porCategoria: string;
    tipo: EFiltroTelaTipo | null;
    opcoes: IMySelectOpcao[]
}

export enum EFiltroTelaTipo {
    fttMelhorAvaliados = 1,
    fttEmEstoque,
    fttOrdemAlfabetica,
    fttLivrosCurtidos,
    fttPorCategoria
}

export interface ILivroTela {
    livro: ILivroAPI;
    usuarioCurtiu: boolean;
}

export interface ILivroAPI {
    name: string;
    author: string;
    description: string; 
    cover_picture: string;
    category: string;
    stock: number;
    users_who_liked: string[];
}