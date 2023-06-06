import {Schema, model} from 'mongoose'
import cantor from './cantor'
import compositor from './compositor'
import genero from './genero'


const MusicaSchema = new Schema({
    nome: {
        required: true,
        type: String
    },
    cantor: [{
        nome_cantor: {
            required: true,
            type: String
        },
        idade:{
            required: true,
            type: String
        }
    }],
    compositor: {
        nome_compositor: {
            required: true,
            type: String
        },
        idade: {
            required: true,
            type: String
        }
    },
    genero: {
        nome_genero: {
            required: true,
            type: String
        },

    },
    ouvintes: {
        required: true,
        type: Number
    },
    lancamento: {
        required: true,
        type:Number
    }
}, {
    timestamps: true
})


export default model('Musica', MusicaSchema)

