const express = require('express')
const app = express()

const port = process.env.PORT || 3000

const morgan = require('morgan')
const bodyParser = require('body-parser')

app.use(morgan('dev'))
app.use(bodyParser.json())

app.get('/marco', (req, res, next)=>{
  res.json('polo!')
})

app.use((err, req, res, next) =>{
  const status = err.status || 500
  res.status(status).json({error: 'say Marco'})
})

app.use((req,res,next) =>{
  res.status(404).json({message: 'say Marco'})
})

const listener = () => console.log(`Listening on port ${port}`)
app.listen(port, listener)
