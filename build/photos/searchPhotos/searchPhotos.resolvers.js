"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resolvers = {
    Query: {
        searchPhotos: function (_, _a) {
            var keyword = _a.keyword;
            console.log("수정");
        }
        // client.photo.findMany({
        //   where: {
        //     caption: {
        //       startsWith: keyword,
        //     },
        //   },
        // }),
    },
};
exports.default = resolvers;
//# sourceMappingURL=searchPhotos.resolvers.js.map