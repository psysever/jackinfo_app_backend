"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
exports.default = (0, apollo_server_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  scalar Upload\n  type CreateAccountResult {\n    ok: Boolean!\n    error: String\n  }\n\n  type Mutation {\n    createAccount(\n      email: String!\n      name: String!\n      phone: String!\n      addr: String!\n      d_addr: String\n      pwd: String!\n    ): CreateAccountResult!\n  }\n"], ["\n  scalar Upload\n  type CreateAccountResult {\n    ok: Boolean!\n    error: String\n  }\n\n  type Mutation {\n    createAccount(\n      email: String!\n      name: String!\n      phone: String!\n      addr: String!\n      d_addr: String\n      pwd: String!\n    ): CreateAccountResult!\n  }\n"])));
var templateObject_1;
