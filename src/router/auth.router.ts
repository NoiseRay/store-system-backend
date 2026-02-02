import { Router } from 'express';
import { check } from 'express-validator';
import { validateProperties } from '../middlewares/validate-properties';
import { AuthService } from '../service/auth/auth.service';
import { Auth } from '../controller/auth/Auth.controller';
const router = Router();
//Ralizamos inyeccion de dependencias del service al controlador para un mejor orden y control.
const authService = new AuthService();
const auth = new Auth( authService );

//Generamos las api's
router.get('/api/v1/saludo', auth.getAction)
router.post('/api/v1/saludo',[
check('name', 'ESte campo es obligatorio').not().isEmpty(), //Middleware de validator
validateProperties //Atrapamos los errores del middlware
],auth.postAction)

export default router;