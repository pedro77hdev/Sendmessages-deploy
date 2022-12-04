"use strict";
exports.__esModule = true;
var mail_controller_1 = require("@src/controllers/mail.controller");
var express_1 = require("express");
var mailRouter = (0, express_1.Router)();
mailRouter.post('/send', mail_controller_1["default"].mail);
mailRouter.get('/', function (req, res) {
    res.send({
        hello: "world"
    });
});
exports["default"] = mailRouter;
