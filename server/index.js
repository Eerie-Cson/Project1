const Koa = require('koa');
const Mongoose = require('mongoose');
const rootRouter = require('./routes');
const category = require('./model/schema');

Mongoose.connect('mongodb://localhost:27017/Category');

const app = new Koa();
app.use(rootRouter.routes()).use(rootRouter.allowedMethods());



module.exports = app;

