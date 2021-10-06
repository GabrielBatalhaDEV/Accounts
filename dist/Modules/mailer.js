"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_handlebars_1 = require("express-handlebars");
var nodemailer_1 = require("nodemailer");
var nodemailer_express_handlebars_1 = __importDefault(require("nodemailer-express-handlebars"));
var mailconfig_json_1 = __importDefault(require("../Config/mailconfig.json"));
var expressHandlebars = new express_handlebars_1.ExpressHandlebars();
var transport = nodemailer_1.createTransport(mailconfig_json_1.default);
exports.transport = transport;
transport.use("compile", nodemailer_express_handlebars_1.default({
    viewEngine: expressHandlebars,
    viewPath: "./src/resources/mail/*",
    extName: ".html"
}));
