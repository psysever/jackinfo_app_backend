"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("./../../client");
var resolvers = {
    Query: {
        seeHashtag: function (_, _a) {
            var hashtag = _a.hashtag;
            return client_1.default.hashtag.findUnique({
                where: __assign({}, (hashtag && { hashtag: hashtag })),
            });
        },
    },
};
exports.default = resolvers;
