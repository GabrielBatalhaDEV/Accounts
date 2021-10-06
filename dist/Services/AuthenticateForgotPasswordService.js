"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
var typeorm_1 = require("typeorm");
var UsersRepositories_1 = require("../Repositories/UsersRepositories");
var auth_json_1 = require("../Config/auth.json");
var mailer_1 = require("../Modules/mailer");
var AuthenticateForgotPasswordService = /** @class */ (function () {
    function AuthenticateForgotPasswordService() {
    }
    AuthenticateForgotPasswordService.prototype.execute = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            var userRepository, user, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userRepository = typeorm_1.getCustomRepository(UsersRepositories_1.UsersRepositories);
                        return [4 /*yield*/, userRepository.findOne({ email: email })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new Error("Email doesnt exists");
                        }
                        token = jsonwebtoken_1.sign({
                            email: user.email,
                            method: "forgot_password"
                        }, auth_json_1.secret, {
                            subject: user.id,
                            expiresIn: "1h"
                        });
                        mailer_1.transport.sendMail({
                            to: email,
                            from: "Gabriel@accounts.com",
                            subject: "forgot passowrd",
                            html: "<!DOCTYPE html>\n      <html lang=\"pt-br\">\n      <head>\n          <meta charset=\"UTF-8\">\n          <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n          <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n          <title>Document</title>\n      </head>\n      <body>\n      <div style=\"display: block\">\n          <p>Esse \u00E9 seu token:</p>\n          " + token + "\n      </div>\n      </body>\n      </html>"
                        }, function (err) {
                            throw new Error("Cannot send forgot password email");
                        });
                        return [2 /*return*/, "Email sent"];
                }
            });
        });
    };
    return AuthenticateForgotPasswordService;
}());
exports.AuthenticateForgotPasswordService = AuthenticateForgotPasswordService;
