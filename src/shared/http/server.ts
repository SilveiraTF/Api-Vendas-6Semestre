import express from 'express'
import cors from 'cors'
import routes from './routes'
import '../typeorm/index'
import 'reflect-metadata'

const app = express();

app.use(cors());

app.use(express.json())

app.use(routes)

app.listen(3003, () => {
    console.log(`Server is running ⚡`)
})