const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Menggunakan middlewares default JSON Server
server.use(middlewares)

// Rute API
server.use(router)

// Menjalankan server pada port 3000
server.listen(3000, () => {
  console.log('JSON Server is running')
})
