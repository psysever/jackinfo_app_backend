"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
exports.default = (0, apollo_server_express_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type EditPhotoResult {\n    ok: Boolean!\n    error: String\n  }\n\n  type Mutation {\n    editPhoto(\n      id: Int!\n      file: Upload\n      file2: Upload\n      file3: Upload\n      file4: Upload\n      file5: Upload\n      file6: Upload\n      file7: Upload\n      file8: Upload\n      caption: String\n      skils: String\n      subject: String\n      subject2: String\n      subject3: String\n      subject4: String\n      subject5: String\n      subject6: String\n      subject7: String\n      subject8: String\n    ): EditPhotoResult!\n  }\n"], ["\n  type EditPhotoResult {\n    ok: Boolean!\n    error: String\n  }\n\n  type Mutation {\n    editPhoto(\n      id: Int!\n      file: Upload\n      file2: Upload\n      file3: Upload\n      file4: Upload\n      file5: Upload\n      file6: Upload\n      file7: Upload\n      file8: Upload\n      caption: String\n      skils: String\n      subject: String\n      subject2: String\n      subject3: String\n      subject4: String\n      subject5: String\n      subject6: String\n      subject7: String\n      subject8: String\n    ): EditPhotoResult!\n  }\n"])));
var templateObject_1;
//# sourceMappingURL=editPhoto.typeDefs.js.map