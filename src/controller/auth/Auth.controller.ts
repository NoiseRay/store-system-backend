import { Request, Response } from "express";
import { IAuthService } from "../../service/auth/IAuth.interface";
//Aqui solo manejasmos las rtestpuestas HTTP
export class AuthController{
  //En el constructor va el argumento que maneja las acciones del servicio con su debida interface
  constructor(private readonly authService: IAuthService) {}

  public loginPost = async (req: Request, res: Response) => {
    try {
      const data = req.body;
      const resp = await this.authService.validateInfoUser(data);
      res.status(200).json({
        msg: resp,
      });
    } catch (error: unknown) {
      //manejas tus errores personalizado
      if (error instanceof Error && error.name == "Error 401") {
        res.status(401).json({
          status: 401,
          name: error.name,
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
