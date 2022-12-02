import "module-alias/register";
import dotenv from "dotenv"
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mailRouter from "./routes/mail.routes";
import { Server } from "@overnightjs/core";

class serverInit extends Server {
  private port = process.env.PORT || 3000

  constructor() {
    super();
    this.startServer();
    this.setupExpress()
    this.routes();
  }

  public startServer(): void {
    this.app.listen(this.port, () => {
      console.log("The server is online on port " + this.port);
    });
  }

  private setupExpress(): void {
    this.app.use(bodyParser.json());
    this.app.use(cors());
    dotenv.config()
  }

  private routes() {
    this.app.use("/mail", mailRouter);
  }
}


export default new serverInit();
