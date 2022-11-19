import mailController from "@src/controllers/mail.controller";
import { Router } from "express";

const mailRouter = Router()


mailRouter.post('/send' , mailController.mail)


export default mailRouter