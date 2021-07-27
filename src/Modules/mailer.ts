import { ExpressHandlebars } from "express-handlebars";
import { createTransport } from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import mailconfig from '../Config/mailconfig.json'

const expressHandlebars = new ExpressHandlebars()

const transport = createTransport(mailconfig)

transport.use("compile", hbs({
    viewEngine: expressHandlebars,
    viewPath: "./src/resources/mail/*",
    extName: ".html"

}))

export {transport}