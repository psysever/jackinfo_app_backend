"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("./../../client");
exports.default = {
    Query: {
        seePhotoRN: function (_, _a) {
            var id = _a.id;
            return client_1.default.photoRN.findUnique({
                where: {
                    id: id,
                },
            });
        },
    },
};
