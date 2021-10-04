import {Router} from 'express'

const routes = Router();

import productRouter from '../../modules/products/routes/product.routes'
import alunoRouter from '../../modules/products/routes/aluno.routes'

routes.use('/products', productRouter)
routes.use('/alunos', alunoRouter)

export default routes