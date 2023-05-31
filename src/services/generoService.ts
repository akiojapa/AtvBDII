import Genero from "../models/genero";
import { GeneroType} from "../types/generoTypes";

class GeneroService {

    async createGenero(data: GeneroType) {
        const result = await Genero.create(data)
        console.log("Usuário criado")
        return result
    }

    async list() {
        const listedGeneros = await Genero.find()

        return listedGeneros
    }

    async find(id) {
        const findedGenero = await Genero.findById(id)

        return findedGenero
    }

    async update(id, dataToUpdate: GeneroType) {
        const updatedGenero = await Genero.findOneAndUpdate({_id: id}, {
            email: dataToUpdate.email,
            firstName: dataToUpdate.firstName,
            lastName: dataToUpdate.lastName

        }, {new: true})

        return updatedGenero
    }

    async delete(id) {
        await Genero.findOneAndDelete({_id: id})
        return
    }

}

export default new GeneroService()