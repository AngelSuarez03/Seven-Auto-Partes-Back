import { StatusCodes } from "http-status-codes"
import ResponseContent from "../utils/response.content"
import { connect } from "../utils/connection"
import Producto from "../models/producto"

class ProductoService {

    static async obtenerProductos() {
        ResponseContent.error = true
        let conn

        try {
            conn = await connect()
            const productos = await conn.query("SELECT * FROM Producto")
            ResponseContent.message = productos[0]
            ResponseContent.status = StatusCodes.OK
            ResponseContent.error = false
        } catch (err: any) {
            ResponseContent.message = `Error: ${err.message}`
            ResponseContent.status = StatusCodes.INTERNAL_SERVER_ERROR
            ResponseContent.error = true
        } finally {
            conn?.end()
        }

        return ResponseContent
    }

}

export default ProductoService;