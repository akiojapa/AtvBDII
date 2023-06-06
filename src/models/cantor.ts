import {Schema, model} from 'mongoose'


const CantorSchema = new Schema({
    nome: {
        required: true,
        type: String
    }
}, {
    timestamps: true
})


export default model('Cantor', CantorSchema)

