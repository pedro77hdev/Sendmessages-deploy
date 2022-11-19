import mailController from "@src/controllers/mail.controller";
import { Response , Router } from "express";


const mailRouter = Router()


mailRouter.post('/send', mailController.mail)
mailRouter.get('/', (req , res:Response) => {
  res.send({
    hello:"world"
  })
})


export default mailRouter