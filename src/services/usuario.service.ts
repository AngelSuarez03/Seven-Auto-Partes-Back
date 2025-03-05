import { StatusCodes } from "http-status-codes"
import ResponseContent from "../utils/response.content"
import Usuario from "../models/usuario"
import { connect } from "../utils/connection"

class UsuarioService {
    static async validarUsuario(correo: string, password: string) {
        ResponseContent.error = true
        let conn

        try {
            conn = await connect()
            const result: any = await conn.query("SELECT * FROM User WHERE correo = ? AND password = ?", [correo, password])
            const usuario = result[0][0]

            if (usuario !== undefined) {
                ResponseContent.status = StatusCodes.OK
                ResponseContent.error = false
                ResponseContent.message = 
                {
                    "correo": usuario.correo,
                }
                return ResponseContent
            } else {
                ResponseContent.message = `El usuario o password no son validos`
                ResponseContent.status = StatusCodes.BAD_REQUEST
                return ResponseContent
            }
        }  catch (err: any) {
            ResponseContent.message = `Error: ${err.message}`
            ResponseContent.status = StatusCodes.INTERNAL_SERVER_ERROR
            return ResponseContent
        } finally {
            conn?.end()
        }
    }
}

export default UsuarioService