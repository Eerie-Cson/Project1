const Koa = require('koa');
const rootRouter = require('./routes');
const bodyParser = require('koa-bodyparser');
const Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost:27017/Category');

const app = new Koa();
app.use(bodyParser());
app.use(rootRouter.routes()).use(rootRouter.allowedMethods());

app.listen(3000);
module.exports = app;
