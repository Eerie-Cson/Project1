const Koa = require('koa');
const rootRouter = require('./routes');

const app = new Koa();
app.use(rootRouter.routes());
app.use(rootRouter.allowedMethods());

module.exports = app;
