import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import routes from './config/routes.js'

const app = express()
const corsOption = {
    origin: '*',        // Aqui se especifica las rutas
}

// Configuracion del middelware
app.use(bodyParser.urlencoded({extended:false})) // El bodyParser transforma de JSON a otro formato
app.use(bodyParser.json())

app.use('/api', cors(corsOption),routes) //El corsOption funciona para enlazar rutas

app.get('/',(req, res)=>res.send('Bievenidos a mi API'))

// Se Crea el servidor virtual
const server = app.listen(process.env.PORT || 8000, ()=>{
    console.log(`Servidor Corriendo En Puerto: ${server.address().port}`)
})
export default app
