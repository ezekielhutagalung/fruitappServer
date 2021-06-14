if (process.env.NODE_ENV === 'development') {
  require('dotenv').config()
}
const express = require('express')

const app = express()
const port = process.env.PORT || 3001
const router = require('./routes/index')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', router)

app.listen(port, () => {
  console.log(`this app is listening on ${port}`)
})
