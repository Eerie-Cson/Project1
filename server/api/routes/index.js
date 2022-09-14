const Router = require('koa-router');
const Items = require('../services/items');

const router = new Router();

router.get('/', async ctx => {
  ctx.body = 'Hello there!';
});

router.post('/items', async ctx => {
  const items = new Items();
  ctx.body = await items.createItem(ctx.request.body);
})
module.exports = router;
