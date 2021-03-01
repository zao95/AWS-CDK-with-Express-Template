import { APIGatewayProxyHandler } from 'aws-lambda'
import { createServer, proxy } from 'aws-serverless-express'
import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.json({
        message: 'hello Express!',
    })
})

app.get('/about', (req, res) => {
    res.json({
        message: 'this is about page',
    })
})

const server = createServer(app)

export const handler: APIGatewayProxyHandler = (event, context) => {
    proxy(server, event, context)
}
