"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const producto_controller_1 = __importDefault(require("../controllers/producto.controller"));
const router = (0, express_1.Router)();
router.get('/', producto_controller_1.default.getProducts);
exports.default = router;
