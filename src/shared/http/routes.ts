import {Router} from 'express'

const routes = Router();

import productRouter from '../../modules/products/routes/product.routes'
import alunoRouter from '../../modules/products/routes/aluno.routes'
import userRouter from '../../modules/users/routes/User.routes'

routes.use('/products', productRouter)
routes.use('/alunos', alunoRouter)
routes.use('/users', userRouter)

export default routes