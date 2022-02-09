"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resolvers = {
    Query: {
        cssSearchPhotos: function (_, _a) {
            var keyword = _a.keyword;
            console.log("수정");
        }
        // client.photoCss.findMany({
        //   where: {
        //     caption: {
        //       startsWith: keyword,
        //     },
        //   },
        // }),
    },
};
exports.default = resolvers;
