import { ObjectId } from "mongoose";
import { CompositorType } from "./compositorTypes";
import { GeneroType } from "./generoTypes";
import { CantorType } from "./cantorTypes";



export interface MusicaType{
    nome: String,
    cantor: Array<CantorType>,
    compositor: CompositorType,
    genero: GeneroType,
    lancamento: Number,
    ouvintes: Number

}