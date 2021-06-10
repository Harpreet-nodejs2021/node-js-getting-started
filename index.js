const express = require('express')
const cool = require('cool-ascii-faces') // Importing the package
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req,res) => res.send(cool())) // We will see a cool face when we go to http://localhost:5000/cool
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
