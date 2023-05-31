import {Request, Response} from 'express'
import cantorService from '../services/cantorService'

class cantorController {

    public async create(req: Request, res: Response){
        const cantor = await cantorService.createCantor(req.body)
        return res.status(200).json(cantor)
    }

    async list(req: Request, res: Response) {
        const cantors = await cantorService.list()

        return res.status(200).json(cantors)
    }

    async find(req: Request, res: Response) {
        const cantor = await cantorService.find(req.params.id)

        return res.status(200).json(cantor)
    }

    async update(req: Request, res: Response) {
        const cantor = await cantorService.update(req.params.id, req.body)

        return res.status(200).json(cantor)
    }

    async delete(req: Request, res: Response) {
        await cantorService.delete(req.params.id)

        return res.status(200).json("Successfully deleted cantor!")
    }

}


export default new cantorController()