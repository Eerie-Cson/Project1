class Repository { 
  setModel(model) {
    this.model = model;
  };

  getModel() {
    return this.model;
  }

  async create(product) {
    
    const {id, data} = product
    const result = await this.model.create({...data, id});

    const {_id, ...res} = result.toObject();
    return res;
  }
}

module.exports = Repository;