import compositor from "../models/compositor";
import { CompositorType} from "../types/compositorTypes";

class compositorService {

    async createCompositor(data: CompositorType) {
        const result = await compositor.create(data)
        console.log("Usuário criado")
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
            email: dataToUpdate.email,
            firstName: dataToUpdate.firstName,
            lastName: dataToUpdate.lastName

        }, {new: true})

        return updatedMusic
    }

    async delete(id) {
        await compositor.findOneAndDelete({_id: id})
        return
    }

}

export default new compositorService()