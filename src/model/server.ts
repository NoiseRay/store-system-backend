import express from "express";
import AuthRouter from '../router/auth.router';

//Este es la clase server el cual se esta ejecutando en el archivo app.ts 
export class Server {
  private readonly app = express();
  private readonly port: number;

  private pathsWeb = {
    auth: "/auth",
  };

  constructor() {
    this.port = 8080;

    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.app.use(express.json());

  }

  private routes(){
    this.app.use(this.pathsWeb.auth, AuthRouter);
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor levantado en puerto: ${this.port}`);
    });
  }
}
