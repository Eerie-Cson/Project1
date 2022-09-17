const Router = require('koa-router');
const ItemServices = require('../services/items');
const item = require('../../lib/generate-data');

const router = new Router();
const items = new ItemServices();

router.get('/', async ctx => {
  ctx.body = 'Hello there!';
});

router.post('/items', async ctx => {
  const ID = item.ID;
  ctx.body = await items.createItem({ID, input: ctx.request.body});
})
module.exports = router;
