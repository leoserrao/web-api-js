const http = require('http')
const PORT = 3000
const handler = (request, response) => {
    const { url, method } = request
    const [first, route, id] = url.split('/')
    request.queryString = { id: isNaN(id) ? id : Number(id)}
    const key = `/${route}:${method.toLowerCase()}`
    console.log('key', key)
    response.end()
}

http.createServer(handler)
    .listen(PORT, () => console.log('Server running at', PORT))