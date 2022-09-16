const model = require('../../model/item');
const Repository = require('../../../lib/repository');

const ItemRepository = new Repository();
ItemRepository.setModel(model);

module.exports = ItemRepository;