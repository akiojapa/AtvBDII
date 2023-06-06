import {Router} from 'express'
import compositorController from './controllers/compositorController'
import cantorController from './controllers/cantorController'
import generoController from './controllers/generoController'
import musicaController from './controllers/musicaController'



const routes = Router()


//Compositor
routes.get('/compositor/list', compositorController.list)
routes.get('/compositor/find/:id', compositorController.find)
routes.post('/compositor/create', compositorController.create)
routes.put('/compositor/update/:id', compositorController.update)
routes.delete('/compositor/delete/:id', compositorController.delete)




//Cantor
routes.get('/cantor/list', cantorController.list)
routes.get('/cantor/find/:id', cantorController.find)
routes.post('/cantor/create', cantorController.create)
routes.put('/cantor/update/:id', cantorController.update)
routes.delete('/cantor/delete/:id', cantorController.delete)


//Genero
routes.get('/genero/list', generoController.list)
routes.get('/genero/find/:id', generoController.find)
routes.post('/genero/create', generoController.create)
routes.put('/genero/update/:id', generoController.update)
routes.delete('/genero/delete/:id', generoController.delete)

//Musica
routes.get('/musica/list', musicaController.list)
routes.get('/musica/find/:id', musicaController.find)
routes.post('/musica/create', musicaController.create)
routes.put('/musica/update/:id', musicaController.update)
routes.delete('/musica/delete/:id', musicaController.delete)
routes.get('/musica/findGTLancamento/:ano', musicaController.findGTLancamento)
routes.get('/musica/findMusicLTOuvintes/:ouvintes', musicaController.findMusicLTOuvintes)
routes.get('/musica/findMusicbyNameCantorCompositor/:nome', musicaController.findMusicbyNameCantorCompositor)
routes.get('/musica/findMusicbyCantorCompositor/:nome', musicaController.findMusicbyCantorCompositor)



export default routes