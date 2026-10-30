import express from 'express'
import cors from 'cors'
import Routers from './routes/index.js'

const app = express();

app.use(cors({ origin:'http://localhost:5173'}))
app.use(express.json())

app.use('/', Routers)

export default app
