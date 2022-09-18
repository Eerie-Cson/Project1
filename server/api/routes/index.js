const Router = require('koa-router');
const ItemServices = require('../services/items');
const { Chance } = require('chance');

const chance = new Chance();
const router = new Router();
const items = new ItemServices();

router.post('/items', async ctx => {
  const ID = chance.string({length: 8, alpha: true, numeric: true, casing: 'upper'});
  ctx.body = await items.createItem({ID, input: ctx.request.body});
})
module.exports = router;
