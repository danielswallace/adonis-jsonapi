'use strict';

const { ServiceProvider } = require('@adonisjs/fold')

class JsonApiProvider extends ServiceProvider {
  
  register () {
    this.app.singleton('AdonisJsonApi/Middleware', (app) => {
      return new JsonApi(app.use)
    })
  }

}

module.exports = JsonApiProvider
