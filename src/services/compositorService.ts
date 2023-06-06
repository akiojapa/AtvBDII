import compositor from "../models/compositor";
import { CompositorType} from "../types/compositorTypes";

class compositorService {

    async createCompositor(data: CompositorType) {
        const result = await compositor.create(data)
        return result
    }

    async list() {
        const listedMusics = await compositor.find()

        return listedMusics
    }

    async find(id) {
        const findedMusic = await compositor.findById(id)

        return findedMusic
    }

    async update(id, dataToUpdate: CompositorType) {
        const updatedMusic = await compositor.findOneAndUpdate({_id: id}, {
            nome: dataToUpdate.nome
        }, {new: true})

        return updatedMusic
    }

    async delete(id) {
        await compositor.findOneAndDelete({_id: id})
        return
    }

}

export default new compositorService()