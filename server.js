const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/knockknock') {
    res.end("<h1>Who's there?</h1>")
  }
  // console.log(req.url)
  // res.end('Hello!')
})

server.listen(3000, () => console.log('Server is running...'))
