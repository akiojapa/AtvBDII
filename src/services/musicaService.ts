import Musica from "../models/musica";
import { MusicaType} from "../types/musicaType";

class MusicaService {

    async createMusica(data: MusicaType) {
        const result = await Musica.create(data)
        console.log("Usuário criado")
        return result
    }

    async list() {
        const listedMusicas = await Musica.find()

        return listedMusicas
    }

    async find(id) {
        const findedMusica = await Musica.findById(id)

        return findedMusica
    }

    async update(id, dataToUpdate: MusicaType) {
        const updatedMusica = await Musica.findOneAndUpdate({_id: id}, {
            email: dataToUpdate.email,
            firstName: dataToUpdate.firstName,
            lastName: dataToUpdate.lastName

        }, {new: true})

        return updatedMusica
    }

    async delete(id) {
        await Musica.findOneAndDelete({_id: id})
        return
    }

}

export default new MusicaService()