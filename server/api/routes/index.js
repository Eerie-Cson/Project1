const Router = require('koa-router');
const ItemServices = require('../services/items');

const router = new Router();
const items = new ItemServices();

router.get('/', async ctx => {
  ctx.body = 'Hello there!';
});

router.post('/items', async ctx => {
  const ID = chance.string({length: 8, alpha: true, numeric: true, casing: 'upper'});
  ctx.body = await items.createItem({ID, input: ctx.request.body});
})
module.exports = router;
