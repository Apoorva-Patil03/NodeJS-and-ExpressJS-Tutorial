const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//eases networking and http functions that we had to do every function by hand
//don't forget to deploy website using digitalocean or AWS use instructions on code with harry website: https://www.codewithharry.com/blogpost/deploy-nodejs-app-on-ubuntu/