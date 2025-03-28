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
                const productos = yield conn.query("SELECT * FROM Producto");
                response_content_1.default.message = productos[0];
                response_content_1.default.status = http_status_codes_1.StatusCodes.OK;
                response_content_1.default.error = false;
            }
            catch (err) {
                response_content_1.default.message = `Error: ${err.message}`;
                response_content_1.default.status = http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR;
                response_content_1.default.error = true;
            }
            finally {
                conn === null || conn === void 0 ? void 0 : conn.end();
            }
            return response_content_1.default;
        });
    }
}
exports.default = ProductoService;
