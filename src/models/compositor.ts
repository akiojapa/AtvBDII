import {Schema, model} from 'mongoose'


const CompositorSchema = new Schema({
    nome: {
        required: true,
        type: String
    }
}, {
    timestamps: true
})


export default model('Compositor', CompositorSchema)

