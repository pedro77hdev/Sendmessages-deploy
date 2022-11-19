"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const mail_routes_1 = __importDefault(require("./routes/mail.routes"));
const core_1 = require("@overnightjs/core");
class serverInit extends core_1.Server {
    port = process.env.PORT || 3000;
    constructor() {
        super();
        this.startServer();
        this.setupExpress();
        this.routes();
    }
    startServer() {
        this.app.listen(this.port, () => {
            console.log("The server is online on port " + this.port);
        });
    }
    setupExpress() {
        this.app.use(body_parser_1.default.json());
        this.app.use((0, cors_1.default)());
        dotenv_1.default.config();
    }
    routes() {
        this.app.use("/mail", mail_routes_1.default);
    }
}
exports.default = new serverInit();
