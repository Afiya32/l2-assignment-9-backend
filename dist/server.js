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
const client_1 = require("@prisma/client");
const app_1 = __importDefault(require("./app"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield prisma.$connect();
            console.log('✅ Database connected successfully');
        }
        catch (error) {
            console.error('❌ Database connection failed:', error);
            process.exit(1);
        }
        // Start the server
        const port = process.env.PORT || 3000;
        app_1.default.listen(port, () => {
            console.log(`🚀 Server is running on http://localhost:${port}`);
        });
    });
}
// Ensure proper connection cleanup in serverless environments
process.on('SIGTERM', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('SIGTERM signal received: closing database connection...');
    yield prisma.$disconnect();
}));
process.on('SIGINT', () => __awaiter(void 0, void 0, void 0, function* () {
    console.log('SIGINT signal received: closing database connection...');
    yield prisma.$disconnect();
}));
// Start the server
main().catch((error) => {
    console.error('Error starting server:', error);
    process.exit(1);
});
