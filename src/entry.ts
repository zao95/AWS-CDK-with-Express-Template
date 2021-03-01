import { APIGatewayProxyHandler } from 'aws-lambda'
import { createServer, proxy } from 'aws-serverless-express'
import express from 'express'

const app = express()
const port = 3000

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

if (process.env.NODE_ENV === 'Offline ') {
    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    })
}

export const handler: APIGatewayProxyHandler = (event, context) => {
    proxy(server, event, context)
}
