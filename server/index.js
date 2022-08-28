const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
  ctx.body = 'Initializing Server...' ;
});

app.listen (8000, 'localhost', _=> {console.log('Server running on port 8000...')});