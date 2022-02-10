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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var shared_utils_1 = require("./../../shared/shared.utils");
var users_utils_1 = require("../../users/users.utils");
var photos_uils_1 = require("../photos.uils");
var client_1 = __importDefault(require("./../../client"));
// import { processHashtags } from './../photos.uils'
exports.default = {
    Mutation: {
        editPhoto: (0, users_utils_1.protectResolver)(function (_, _a, _b) {
            var id = _a.id, file = _a.file, file2 = _a.file2, file3 = _a.file3, file4 = _a.file4, file5 = _a.file5, file6 = _a.file6, file7 = _a.file7, file8 = _a.file8, caption = _a.caption, skils = _a.skils, subject = _a.subject, subject2 = _a.subject2, subject3 = _a.subject3, subject4 = _a.subject4, subject5 = _a.subject5, subject6 = _a.subject6, subject7 = _a.subject7, subject8 = _a.subject8;
            var loggedInUser = _b.loggedInUser;
            return __awaiter(void 0, void 0, void 0, function () {
                var oldPhoto, hashtagObj, fileUrl, fileUrl2, fileUrl3, fileUrl4, fileUrl5, fileUrl6, fileUrl7, fileUrl8;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            console.log(id);
                            return [4 /*yield*/, client_1.default.photo.findFirst({
                                    where: {
                                        id: id,
                                        userId: loggedInUser.id,
                                    },
                                    // include: {
                                    //   hashtags: {
                                    //     select: {
                                    //       hashtag: true,
                                    //     },
                                    //   },
                                    // },
                                })];
                        case 1:
                            oldPhoto = _c.sent();
                            if (!oldPhoto) {
                                return [2 /*return*/, {
                                        ok: false,
                                        error: 'NoPhoto',
                                    }];
                            }
                            hashtagObj = [];
                            if (caption) {
                                hashtagObj = (0, photos_uils_1.processHashtags)(caption);
                            }
                            fileUrl = null;
                            fileUrl2 = null;
                            fileUrl3 = null;
                            fileUrl4 = null;
                            fileUrl5 = null;
                            fileUrl6 = null;
                            fileUrl7 = null;
                            fileUrl8 = null;
                            if (!file) return [3 /*break*/, 3];
                            return [4 /*yield*/, (0, shared_utils_1.uploadToS3)(file, loggedInUser.id, 'uploadPhotoNode')];
                        case 2:
                            fileUrl = _c.sent();
                            _c.label = 3;
                        case 3:
                            if (!file2) return [3 /*break*/, 5];
                            return [4 /*yield*/, (0, shared_utils_1.uploadToS3)(file2, loggedInUser.id, 'uploadPhotoNode')];
                        case 4:
                            fileUrl2 = _c.sent();
                            _c.label = 5;
                        case 5:
                            if (!file3) return [3 /*break*/, 7];
                            return [4 /*yield*/, (0, shared_utils_1.uploadToS3)(file3, loggedInUser.id, 'uploadPhotoNode')];
                        case 6:
                            fileUrl3 = _c.sent();
                            _c.label = 7;
                        case 7:
                            if (!file4) return [3 /*break*/, 9];
                            return [4 /*yield*/, (0, shared_utils_1.uploadToS3)(file4, loggedInUser.id, 'uploadPhotoNode')];
                        case 8:
                            fileUrl4 = _c.sent();
                            _c.label = 9;
                        case 9:
                            if (!file5) return [3 /*break*/, 11];
                            return [4 /*yield*/, (0, shared_utils_1.uploadToS3)(file5, loggedInUser.id, 'uploadPhotoNode')];
                        case 10:
                            fileUrl5 = _c.sent();
                            _c.label = 11;
                        case 11:
                            if (!file6) return [3 /*break*/, 13];
                            return [4 /*yield*/, (0, shared_utils_1.uploadToS3)(file6, loggedInUser.id, 'uploadPhotoNode')];
                        case 12:
                            fileUrl6 = _c.sent();
                            _c.label = 13;
                        case 13:
                            if (!file7) return [3 /*break*/, 15];
                            return [4 /*yield*/, (0, shared_utils_1.uploadToS3)(file7, loggedInUser.id, 'uploadPhotoNode')];
                        case 14:
                            fileUrl7 = _c.sent();
                            _c.label = 15;
                        case 15:
                            if (!file8) return [3 /*break*/, 17];
                            return [4 /*yield*/, (0, shared_utils_1.uploadToS3)(file8, loggedInUser.id, 'uploadPhotoNode')];
                        case 16:
                            fileUrl8 = _c.sent();
                            _c.label = 17;
                        case 17: return [4 /*yield*/, client_1.default.photo.update({
                                where: {
                                    id: id,
                                },
                                data: __assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign(__assign({}, (file && { file: fileUrl })), (file2 && { file2: fileUrl2 })), (file3 && { file3: fileUrl3 })), (file4 && { file4: fileUrl4 })), (file5 && { file5: fileUrl5 })), (file6 && { file6: fileUrl6 })), (file7 && { file7: fileUrl7 })), (file8 && { file8: fileUrl8 })), { caption: caption, skils: skils, subject: subject, subject2: subject2, subject3: subject3, subject4: subject4, subject5: subject5, subject6: subject6, subject7: subject7, subject8: subject8, user: {
                                        connect: {
                                            id: loggedInUser.id,
                                        },
                                    } }),
                            })];
                        case 18:
                            _c.sent();
                            return [2 /*return*/, {
                                    ok: true,
                                }];
                    }
                });
            });
        }),
    },
};
//# sourceMappingURL=editPhoto.resolvers.js.map