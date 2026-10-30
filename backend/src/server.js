import app from './app.js'
import dotenv from 'dotenv'

dotenv.config()

app.listen(process.env.PORT, (req, res) => {
    console.log(`Server bắt đầu trên cổng http://localhost:${process.env.PORT}`)
})