import { Request, Response} from "express";
import { StatusCodes } from "http-status-codes";
import UsuarioService from "../services/usuario.service"

class UsuarioController {

    static async loginUser (req: Request, res: Response) {

        const { correo, password } = req.body

        if( correo && password && correo.trim() != "" && password.trim() !== "" ) {
            const result: any = await UsuarioService.validarUsuario(correo, password)
            
            if (!result.error) {

                res.status(result.status).json({
                    message: result.message,
                    error: result.error
                })
            } else {
                res.status(result.status).json({
                    message: result.message,
                    error: result.error
                })
            }

        } else {
            res.status(StatusCodes.BAD_REQUEST).json({
                message: 'Los datos nos son correctos',
                error: true
            })
        }
        
    }

}

export default UsuarioController