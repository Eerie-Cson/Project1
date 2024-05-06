class Repository { 
  setModel(model) {
    this.model = model;
  };

  getModel() {
    return this.model;
  };

  returnValue ({_id, id, ...res}) {
    return {
      id: id,
      data: res
    }
  }

  async create(params) {
    const { data } = params;
    const result = await this.model.create({...data, id: params.id});
    return this.returnValue(result.toObject());
  };

  async exists(params) {
    const found = await this.find(params);
    if(found.length === 0 ) return false
    return true 
  }


  async find(params) {
    const result = await this.model.find(params);

    return result.map((obj) => {
      return this.returnValue(obj.toObject())
    });
  }

  async updateOne(params) {
    await this.model.updateOne({id: params.id},{$set: params.data });
    return params.id;
  }

  // async deleteAll() {
  //   await this.model.deleteMany({});
  //   return true;
  // }
}

module.exports = Repository;
