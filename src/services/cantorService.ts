import cantor from "../models/cantor";
import {CantorType} from "../types/cantorTypes";

class cantorService {

    async createCantor(data: CantorType) {
        const result = await cantor.create(data)
        console.log("Usuário criado")
        return result
    }

    async list() {
        const listedcantors = await cantor.find()

        return listedcantors
    }

    async find(id) {
        const findedcantor = await cantor.findById(id)

        return findedcantor
    }

    async update(id, dataToUpdate: CantorType) {
        const updatedcantor = await cantor.findOneAndUpdate({_id: id}, {
            email: dataToUpdate.email,
            firstName: dataToUpdate.firstName,
            lastName: dataToUpdate.lastName

        }, {new: true})

        return updatedcantor
    }

    async delete(id) {
        await cantor.findOneAndDelete({_id: id})
        return
    }

}

export default new cantorService()