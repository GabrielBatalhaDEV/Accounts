import { ExpressHandlebars } from "express-handlebars";
import nodemailer from "nodemailer";

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "3d54e474a5a11a",
    pass: "ce1e8b4875ea4b",
  },
});

export { transport };
