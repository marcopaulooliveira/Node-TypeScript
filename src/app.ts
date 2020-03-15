import { FastifyInstance } from 'fastify'
import autoload = require('fastify-autoload')
import path = require('path')
import { request } from 'http'


export = async (fastify: FastifyInstance, opts: any) => {
    fastify.register(autoload, {
        dir: path.join(__dirname, 'services'),
        options: {prefix: 'api/'}
    })
    
    fastify.ready().then(() => {
        console.log(fastify.printRoutes())
    })
}