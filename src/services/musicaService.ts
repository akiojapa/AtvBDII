import Musica from "../models/musica";
import { MusicaType} from "../types/musicaType";

class MusicaService {

    async createMusica(data: MusicaType) {
        const result = await Musica.create(data)
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
            nome: dataToUpdate.nome,
            cantor: dataToUpdate.cantor,
            compositor: dataToUpdate.compositor,
            genero: dataToUpdate.genero,
            ouvintes: dataToUpdate.ouvintes,
            lancamento: dataToUpdate.lancamento 

        }, {new: true})

        return updatedMusica
    }

    async delete(id) {
        await Musica.findOneAndDelete({_id: id})
        return
    }

    async findGTLancamento(ano) {
        const findedMusica = await Musica.find({lancamento: {$gt: ano}})

        return findedMusica
    }

    
    async findMusicLTOuvintes(ouvintes) {
        const findedMusica = await Musica.find({ouvintes: {$lt: ouvintes}})

        return findedMusica
    }

    async findMusicbyNameCantorCompositor(nome) {
        const findedMusica = await Musica.find({$or: [{"cantor.nome_cantor" : nome}, {"compositor.nome_compositor" : nome}]})

        return findedMusica
    }

    async findMusicbyCantorCompositor(nome) {
        const findedMusica = await Musica.find({$and:[{"cantor.nome_cantor" : nome}, {"compositor.nome_compositor" : nome}]})

        return findedMusica
    }


}

export default new MusicaService()