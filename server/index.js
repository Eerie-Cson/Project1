const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Initializing Server...' ;
});

module.exports = app;