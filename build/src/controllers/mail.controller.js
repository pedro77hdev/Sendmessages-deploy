"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
class mailController {
    async mail(req, res) {
        const { text } = req.body;
        const mailOptions = {
            from: "bunterapp@outlook.com",
            to: "bunterapp@yahoo.com",
            subject: "Sugestão Bunter",
            html: `<p>${text}</p>`,
        };
        const transporter = nodemailer_1.default.createTransport({
            service: "outlook",
            auth: {
                user: "bunterapp@outlook.com",
                pass: "Bunter7711",
            },
            logger: true,
        });
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                return res.send(err);
            }
            res.send(info);
        });
        res.status(200).send({ ok: "ok" });
    }
}
exports.default = new mailController();
