const Koa = require('koa');
const rootRouter = require('./api/routes');
const bodyParser = require('koa-bodyparser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/inventoref');

const app = new Koa();
app.use(bodyParser());
app.use(rootRouter.routes()).use(rootRouter.allowedMethods());


module.exports = app;
