import {Schema, model} from 'mongoose'


const GeneroSchema = new Schema({
    nome: {
        required: true,
        type: String
    }
}, {
    timestamps: true
})


export default model('Genero', GeneroSchema)

