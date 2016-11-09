'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _isNumeric = require('./isNumeric');

var _isNumeric2 = _interopRequireDefault(_isNumeric);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function (req, res) {
    var result = '0';
    if (!(0, _isNumeric2.default)(req.query.a) && !(0, _isNumeric2.default)(req.query.b)) {
        result = '0';
    } else if ((0, _isNumeric2.default)(req.query.a) && !(0, _isNumeric2.default)(req.query.b)) {
        result = req.query.a;
    } else if (!(0, _isNumeric2.default)(req.query.a) && (0, _isNumeric2.default)(req.query.b)) {
        result = req.query.b;
    } else if ((0, _isNumeric2.default)(req.query.a) && (0, _isNumeric2.default)(req.query.b)) {
        result = String(parseFloat(req.query.a) + parseFloat(req.query.b));
    }
    res.send(result);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

//# sourceMappingURL=index-compiled.js.map