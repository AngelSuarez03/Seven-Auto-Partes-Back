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
const usuario_service_1 = __importDefault(require("../services/usuario.service"));
class UsuarioController {
    static loginUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { correo, password } = req.body;
            if (correo && password && correo.trim() != "" && password.trim() !== "") {
                const result = yield usuario_service_1.default.validarUsuario(correo, password);
                if (!result.error) {
                    res.status(result.status).json({
                        message: result.message,
                        error: result.error
                    });
                }
                else {
                    res.status(result.status).json({
                        message: result.message,
                        error: result.error
                    });
                }
            }
            else {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
                    message: 'Los datos nos son correctos',
                    error: true
                });
            }
        });
    }
}
exports.default = UsuarioController;
