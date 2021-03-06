"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = __importDefault(require("../../client"));
var users_utils_1 = require("../users.utils");
exports.default = {
    Query: {
        me: (0, users_utils_1.protectResolver)(function (_, __, _a) {
            var loggedInUser = _a.loggedInUser;
            return client_1.default.user.findUnique({
                where: {
                    id: loggedInUser.id,
                },
            });
        }),
    },
};
//# sourceMappingURL=me.resolvers.js.map