class Repository { 
  setModel(model) {
    this.model = model;
  };

  getModel() {
    return this.model;
  };

  async create(params) {
    
    const { data } = params;
    const result = await this.model.create({...data, id: params.id});

    const {_id, id, ...res} = result.toObject();
    return {
      id: id,
      data: res
    };
  };
}

module.exports = Repository;