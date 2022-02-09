"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("../../client");
var query = {
    Query: {
        seeProfile: function (_, _a) {
            var email = _a.email;
            return client_1.default.user.findUnique({
                where: {
                    email: email,
                },
            });
        },
    },
};
exports.default = query;
