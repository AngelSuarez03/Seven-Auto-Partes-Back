"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const response_content_1 = __importDefault(require("../utils/response.content"));
const connection_1 = require("../utils/connection");
class ProductoService {
    static obtenerProductos() {
        return __awaiter(this, void 0, void 0, function* () {
            response_content_1.default.error = true;
            let conn;
            try {
                conn = yield (0, connection_1.connect)();
                const result = yield conn.query("SELECT * FROM Producto");
                const producto = result[0][0];
                if (producto !== undefined) {
                    response_content_1.default.status = http_status_codes_1.StatusCodes.OK;
                    response_content_1.default.error = false;
                    response_content_1.default.message = producto;
                    return response_content_1.default;
                }
                else {
                    response_content_1.default.message = `No se pudieron obtener los datos de los productos`;
                    response_content_1.default.status = http_status_codes_1.StatusCodes.BAD_REQUEST;
                    return response_content_1.default;
                }
            }
            catch (err) {
                response_content_1.default.message = `Error: ${err.message}`;
                response_content_1.default.status = http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
                return response_content_1.default;
            }
            finally {
                conn === null || conn === void 0 ? void 0 : conn.end();
            }
        });
    }
}
exports.default = ProductoService;
