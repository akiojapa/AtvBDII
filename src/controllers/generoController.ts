import {Request, Response} from 'express'
import generoService from '../services/generoService'

class generoController {

    public async create(req: Request, res: Response){
        const genero = await generoService.createGenero(req.body)
        return res.status(200).json(genero)
    }

    async list(req: Request, res: Response) {
        const generos = await generoService.list()

        return res.status(200).json(generos)
    }

    async find(req: Request, res: Response) {
        const genero = await generoService.find(req.params.id)

        return res.status(200).json(genero)
    }

    async update(req: Request, res: Response) {
        const genero = await generoService.update(req.params.id, req.body)

        return res.status(200).json(genero)
    }

    async delete(req: Request, res: Response) {
        await generoService.delete(req.params.id)

        return res.status(200).json("Successfully deleted genero!")
    }

}


export default new generoController()