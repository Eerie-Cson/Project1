const { Chance } = require('chance');
const R = require('ramda');

const chance = new Chance();
const productData = () => {
  const product = () => ({
    ID: chance.string({length: 8, alpha: true, numeric: true, casing: 'upper'}),
    item: chance.word(),
    stock: chance.natural({min: 1, max: 5000}),
    price: chance.floating({min: 1, max: 5000, fixed: 2}),
  })
  return {
    times: R.times(product),
    once:  () => product()
  }
};

module.exports = productData;

