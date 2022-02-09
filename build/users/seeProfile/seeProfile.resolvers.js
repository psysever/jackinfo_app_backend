"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = __importDefault(require("../../client"));
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
//# sourceMappingURL=seeProfile.resolvers.js.map