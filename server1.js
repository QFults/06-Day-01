const http = require('http')

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  switch (req.url) {
    case '/movies':
      res.end(`
      <ul>
        <li>movie1</li>
        <li>movie2</li>
        <li>movie3</li>
      </ul>
      `)
      break
    case '/songs':
      res.end(`
      <ul>
        <li>song1</li>
        <li>song2</li>
        <li>song3</li>
      </ul>
      `)
      break
    case '/foods':
      res.end(`
      <ul>
        <li>food1</li>
        <li>food2</li>
        <li>food3</li>
      </ul>
      `)
      break
    case '/games':
      res.end(`
      <ul>
        <li>game1</li>
        <li>game2</li>
        <li>game3</li>
      </ul>
      `)
      break
  }
  // if (req.url === '/knockknock') {
  //   res.end("<h1>Who's there?</h1>")
  // }
  // console.log(req.url)
  // res.end('Hello!')
})

server.listen(3000, () => console.log('Server is running...'))
