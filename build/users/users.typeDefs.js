"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
exports.default = (0, apollo_server_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type User {\n    id: Int!\n    email: String!\n    name: String!\n    phone: String!\n    addr: String!\n    d_addr: String\n    bio: String\n    photos: [Photo]\n    avatar: String\n    createdAt: String!\n    updatedAt: String!\n    isMe: Boolean!\n   \n  }\n"], ["\n  type User {\n    id: Int!\n    email: String!\n    name: String!\n    phone: String!\n    addr: String!\n    d_addr: String\n    bio: String\n    photos: [Photo]\n    avatar: String\n    createdAt: String!\n    updatedAt: String!\n    isMe: Boolean!\n   \n  }\n"])));
var templateObject_1;
//# sourceMappingURL=users.typeDefs.js.map