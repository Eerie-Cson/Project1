const Router = require('koa-router');

const router = new Router();

router.get('/get', async ctx => {
  ctx.body = 'Hello there!';
});

module.exports = router;