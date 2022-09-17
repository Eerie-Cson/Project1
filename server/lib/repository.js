class Repository { 
  setModel(model) {
    this.model = model;
  };

  getModel() {
    return this.model;
  }

  async create(data) {
    const result = await this.model.create(data);

    const {_id, ...res} = result;
    return res;
  }
}

module.exports = Repository;