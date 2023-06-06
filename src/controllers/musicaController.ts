import {Request, Response} from 'express'
import MusicaService from '../services/musicaService'

class MusicaController {

    public async create(req: Request, res: Response){
        const musica = await MusicaService.createMusica(req.body)
        return res.status(200).json(musica)
    }

    async list(req: Request, res: Response) {
        const musicas = await MusicaService.list()

        return res.status(200).json(musicas)
    }

    async find(req: Request, res: Response) {
        const musica = await MusicaService.find(req.params.id)

        return res.status(200).json(musica)
    }

    async update(req: Request, res: Response) {
        const musica = await MusicaService.update(req.params.id, req.body)

        return res.status(200).json(musica)
    }

    async delete(req: Request, res: Response) {
        await MusicaService.delete(req.params.id)

        return res.status(200).json("Successfully deleted musica!")
    }

    async findGTLancamento(req: Request, res: Response) {
        const musica = await MusicaService.findGTLancamento(req.params.ano)

        return res.status(200).json(musica)
    }

    async findMusicLTOuvintes(req: Request, res: Response) {
        const musica = await MusicaService.findMusicLTOuvintes(req.params.ouvintes)

        return res.status(200).json(musica)
    }

    async findMusicbyNameCantorCompositor(req: Request, res: Response) {
        const musica = await MusicaService.findMusicbyNameCantorCompositor(req.params.nome)

        return res.status(200).json(musica)
    }

    async findMusicbyCantorCompositor(req: Request, res: Response) {
        const musica = await MusicaService.findMusicbyCantorCompositor(req.params.nome)

        return res.status(200).json(musica)
    }

}


export default new MusicaController()