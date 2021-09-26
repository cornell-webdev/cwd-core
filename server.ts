const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

// force https
app.enable('trust proxy')
app.use((req, res, next) => {
  req.secure ? next() : res.redirect('https://' + req.headers.host + req.url)
})

app.use(express.static(path.join(__dirname, 'build')))

app.listen(port, () => console.log(`App is live on port ${port}!`))
