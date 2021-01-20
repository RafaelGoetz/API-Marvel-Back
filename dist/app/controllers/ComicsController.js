"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _ComicsService = require('../services/ComicsService'); var _ComicsService2 = _interopRequireDefault(_ComicsService);

class ComicsController {

  async show(request, response){
    const { id } = request.params;
    const data = await _ComicsService2.default.getComic(id)

    return response.json(data)
  }
}

exports. default = new ComicsController();
