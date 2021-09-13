import express, { NextFunction, Request, Response } from 'express'
import cors from 'cors'
import {errors} from 'celebrate'
import routes from './routes'
import '../typeorm/index'
import 'reflect-metadata'
import AppError from 'shared/errors/AppError'

const app = express();

app.use(cors());

app.use(express.json())

app.use(routes)

app.use(errors())

//tratar os nossos erros das nossas regras de negócio
app.use(
    (error: Error, request: Request, response: Response, next: NextFunction) => {
        if (error instanceof AppError){
            return response.status(error.statusCode).json({
                status: 'error',
                message: error.message
            })
        }
        return response.status(500).json({
            status: "error",
            message: "internal server error"
        })
    }
    
)
app.listen(3003, () => {
    console.log(`Server is running ⚡`)
})