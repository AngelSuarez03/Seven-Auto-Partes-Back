import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import ProductoService from '../services/producto.service';

class ProductoController {

    static async getProducts ( req: Request, res: Response ) {

        const result: any = await ProductoService.obtenerProductos()

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
        
    }

}

export default ProductoController;