const http = require('http')
const PORT = 3000
const handler = (request, response) => {
    const { url, method } = request
    const [first, route, id] = url.split('/')
    request.queryString = { id: isNaN(id) ? id : Number(id)}
    console.log(request.queryString)
    response.end()
}

http.createServer(handler)
    .listen(PORT, () => console.log('Server running at', PORT))