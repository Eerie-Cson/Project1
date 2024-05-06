const Router = require('koa-router');
const ItemServices = require('../services/items');
const { Chance } = require('chance');

const chance = new Chance();
const router = new Router();
const items = new ItemServices();

router.get('/', async ctx => {
  ctx.body = 'HOME'
})

router.get('/items', async ctx => {
  ctx.body = await items.displayItems();
})

router.post('/create/items', async ctx => {
  const ID = chance.string({length: 8, alpha: true, numeric: true, casing: 'upper'});
  
  ctx.body = await items.createItem({
    ID, 
    data: ctx.request.body
  });
});

router.patch('/items/:id', async ctx => {
  const ID  = ctx.request.params.id;
  ctx.body = await items.updateItem(ID, ctx.request.body)
})
module.exports = router;
