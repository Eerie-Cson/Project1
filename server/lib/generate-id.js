const { Chance } = require('chance');

const chance = new Chance();

module.exports = chance.string({length: 8, alpha: true, numeric: true, casing: 'upper'});