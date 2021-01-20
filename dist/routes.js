"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _CharacterController = require('./app/controllers/CharacterController'); var _CharacterController2 = _interopRequireDefault(_CharacterController);
var _ComicsController = require('./app/controllers/ComicsController'); var _ComicsController2 = _interopRequireDefault(_ComicsController);
var _logMiddlewares = require('./app/middlewares/logMiddlewares'); var _logMiddlewares2 = _interopRequireDefault(_logMiddlewares);

const routes = new (0, _express.Router)();

routes.use(_logMiddlewares2.default.register);

routes.get('/characters', _CharacterController2.default.index)
routes.get('/characters/:id', _CharacterController2.default.show)

routes.get('/comic/:id', _ComicsController2.default.show)

exports. default = routes;
