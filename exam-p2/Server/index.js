const express = require('express')
const mongoose = require('mongoose');
const app = express()
const port = 3000
const dotenv = require("dotenv")
const router = require("./router/index")
app.get('/', (req, res) => {
  res.send('Hello World!')
})

dotenv.config();
const DB_URL=process.env.DB_URL
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use("/product",router)

mongoose.connect(DB_URL)
.then(() => {console.log('Connected!')
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`)
    })

    });