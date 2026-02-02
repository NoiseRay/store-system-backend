import { Request, Response } from "express";
import { IAuthService } from "../../service/auth/IAuth.interface";
//Aqui solo manejasmos las rtestpuestas HTTP
export class Auth {
  //En el constructor va el argumento que maneja las acciones del servicio con su debida interface
  constructor(private readonly authService: IAuthService) {}
  public getAction = async (req: Request, res: Response) => {
    try {
      const resp = await this.authService.greeting();
      console.log(resp);
      res.status(200).json({
        msg: resp,
      });
    } catch (error: unknown) {
      res.status(500).json({
        status: 500,
        msg: "Error en el servidor",
      });
    }
  };

  public postAction = async (req: Request, res: Response) => {
    try {
      const { name } = req.body;

      const resp = await this.authService.createMessage(name);
      res.status(200).json({
        msg: resp,
      });
    } catch (error: unknown) {
        //manejas tus errores personalizado
      if (error instanceof Error && error.name == "Error 404") {
        res.status(404).json({
          status: 404,
          name:error.name,
          msg: error.message,
        });
      }
      //error general 500
      res.status(500).json({
        status: 500,
        msg: "Error en el servidor",
      });
    }
  };
}
