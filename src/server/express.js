import express from 'express'
const server = express()
import path from 'path'


const webpack = require('webpack')
const config = require('../../config/webpack.dev.js')
const compiler = webpack(config)

const webpackDevMiddleware =
require('webpack-dev-middleware')(
	compiler,
	config.devServer
)

const webpackHotMiddleware =
require('webpack-hot-middleware')(
	compiler,
	config.devServer
)

server.use(webpackDevMiddleware)
server.use(webpackHotMiddleware)

const staticMiddleware = express.static('dist')

server.use(staticMiddleware)
// debugger

server.listen(8080, () => {
	console.log('server is listening')
})
