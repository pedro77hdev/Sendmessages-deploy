import mailController from "@src/controllers/mail.controller";
import { Router } from "express";

const mailRouter = Router()


mailRouter.post('/send', mailController.mail)
mailRouter.get('/', (req, res) => {
  res.send({
    "hello":"world"
  })
})


export default mailRouter