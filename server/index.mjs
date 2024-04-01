import fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = fastify()

server.register(fastifyStatic, {
  root: join(__dirname, '../build'),
})

server.setNotFoundHandler((_, reply) => {
  return reply.sendFile('index.html')
})

const port = process.env.PORT || 5555
const host = process.env.HOST || 'localhost' //0.0.0.0

server.listen({ port, host }, (err, address) => {
  if (err) {
    console.log('Oops', err)
    return
  }
  console.log('Server is started at ' + address)
})