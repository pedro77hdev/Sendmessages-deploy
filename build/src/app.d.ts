import "module-alias/register";
import { Server } from "@overnightjs/core";
declare class serverInit extends Server {
    private port;
    constructor();
    startServer(): void;
    private setupExpress;
    private routes;
}
declare const _default: serverInit;
export default _default;
