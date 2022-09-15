const Router = require('koa-router');
const ItemServices = require('../services/items');

const router = new Router();
const items = new ItemServices();

router.get('/', async ctx => {
  ctx.body = 'Hello there!';
});

router.post('/items', async ctx => {
  ctx.body = await items.createItem(ctx.request.body);
})
module.exports = router;
