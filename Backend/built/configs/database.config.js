"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnect = void 0;
var mongoose_1 = require("mongoose");
var dbConnect = function () {
    (0, mongoose_1.connect)(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(function () { return console.log("Connect Successfully"); }, function (error) { return console.log(error); });
};
exports.dbConnect = dbConnect;
