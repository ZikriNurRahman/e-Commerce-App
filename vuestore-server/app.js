const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const PORT = process.env.PORT || 8000

app.use(cors({
    origin: 'http://localhost:5173'
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/img', express.static(path.join(__dirname, './public/img')))

const db = require('./app/models')
db.mongoose
    .connect(db.url, {
        //useNewUrlParser: true,
        //useUnifiedTopology: true,
    })
    .then((result) => {
      console.log('Database connected')
    }).catch((err) => {
      console.log("Can not connect to Database", err)
      process.exit()
    });

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to vuestore-server'
    })
})

require('./app/routes/product.route')(app)
require('./app/routes/order.route')(app)

app.listen(PORT, () => {
    console.log(`server is running on hhtp://localhost:${PORT}`)
})