"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_router_1 = __importDefault(require("./routes/usuario.router"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    origin: "http://localhost:5173"
}));
const PORT = process.env.PORT || 3001;
app.use('/api/usuario', usuario_router_1.default);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
