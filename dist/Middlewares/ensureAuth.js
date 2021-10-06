"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = require("jsonwebtoken");
var auth_json_1 = require("../Config/auth.json");
function ensureAuth(request, response, next) {
    var req_token = request.headers.authorization;
    if (!req_token) {
        return response.status(401).json({ error: "Invalid Token" });
    }
    var _a = req_token.split(" "), token = _a[1];
    if (!token) {
        return response.status(401).json({ error: "Invalid Token" });
    }
    try {
        var _b = jsonwebtoken_1.verify(token, auth_json_1.secret), sub = _b.sub, method = _b.method;
        if (method) {
            return response.status(401).json({ error: "Invalid Token1" });
        }
        request.user_id = sub;
        next();
    }
    catch (error) {
        return response.status(401).json({ error: "Invalid Token" });
    }
}
exports.ensureAuth = ensureAuth;
