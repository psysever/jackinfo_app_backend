"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
exports.default = (0, apollo_server_express_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type seeFeedResult {\n    Photo: [Photo]\n    PhotoCss: [PhotoCss]\n    PhotoRJ: [PhotoRJ]\n    PhotoRN: [PhotoRN]\n    totalCount: Int!\n    totalCountCss: Int!\n    totalCountRJ: Int!\n    totalCountRN: Int!\n  }\n\n  type Query {\n    seeFeed: seeFeedResult\n  }\n"], ["\n  type seeFeedResult {\n    Photo: [Photo]\n    PhotoCss: [PhotoCss]\n    PhotoRJ: [PhotoRJ]\n    PhotoRN: [PhotoRN]\n    totalCount: Int!\n    totalCountCss: Int!\n    totalCountRJ: Int!\n    totalCountRN: Int!\n  }\n\n  type Query {\n    seeFeed: seeFeedResult\n  }\n"])));
var templateObject_1;
