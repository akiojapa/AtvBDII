import {Request, Response} from 'express'
import CompositorService from '../services/compositorService'

class CompositorController {

    public async create(req: Request, res: Response){
        const compositor = await CompositorService.createCompositor(req.body)
        return res.status(200).json(compositor)
    }

    async list(req: Request, res: Response) {
        const compositors = await CompositorService.list()

        return res.status(200).json(compositors)
    }

    async find(req: Request, res: Response) {
        const compositor = await CompositorService.find(req.params.id)

        return res.status(200).json(compositor)
    }

    async update(req: Request, res: Response) {
        const compositor = await CompositorService.update(req.params.id, req.body)

        return res.status(200).json(compositor)
    }

    async delete(req: Request, res: Response) {
        await CompositorService.delete(req.params.id)

        return res.status(200).json("Successfully deleted compositor!")
    }

}


export default new CompositorController()