import { Request, Response } from "express";
import nodemailer, { SendMailOptions } from "nodemailer";
import { host, port, user, pass } from "@src/config/auth.json";

class mailController {
  public async mail(req: Request, res: Response) {
    const { text } = req.body;

    const mailOptions: SendMailOptions = {
      from: "bunterapp@outlook.com",
      to: "bunterapp@yahoo.com",
      subject: "Sugestão Bunter",
      html: `<p>${text}</p>`,
    };

    const transporter = nodemailer.createTransport({
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

export default new mailController();
