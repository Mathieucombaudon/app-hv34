import servo from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

dotenv.config({ path: '.env' })
const app = servo()
const port = process.env.APP_PORT

app.use(cors())
app.use(bodyParser.json())

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})

