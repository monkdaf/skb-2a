'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _isomorphicFetch = require('isomorphic-fetch');

var _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _isNum = require('./isNum');

var _isNum2 = _interopRequireDefault(_isNum);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var __DEV__ = true;
var app = (0, _express2.default)();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    var result = '0';
    if (!(0, _isNum2.default)(req.query.a) && !(0, _isNum2.default)(req.query.b)) {
        result = '0';
    } else if ((0, _isNum2.default)(req.query.a) && !(0, _isNum2.default)(req.query.b)) {
        result = req.query.a;
    } else if (!(0, _isNum2.default)(req.query.a) && (0, _isNum2.default)(req.query.b)) {
        result = req.query.b;
    } else if ((0, _isNum2.default)(req.query.a) && (0, _isNum2.default)(req.query.b)) {
        result = String(parseFloat(req.query.a) + parseFloat(req.query.b));
    }
    console.log(result);
    res.send(result);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

//# sourceMappingURL=index-compiled.js.map

//# sourceMappingURL=index-compiled-compiled.js.map