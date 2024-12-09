"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_router_1 = __importDefault(require("../src/app/modules/user/user.router"));
const product_route_1 = __importDefault(require("../src/app/modules/product/product.route"));
const shop_router_1 = __importDefault(require("../src/app/modules/shop/shop.router"));
const order_route_1 = __importDefault(require("../src/app/modules/order/order.route"));
const orderitem_router_1 = __importDefault(require("../src/app/modules/orderItem/orderitem.router"));
const review_router_1 = __importDefault(require("../src/app/modules/reviews/review.router"));
const app = (0, express_1.default)();
// middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// router
app.use("/users", user_router_1.default);
app.use("/products", product_route_1.default);
app.use("/shop", shop_router_1.default);
app.use("/order", order_route_1.default);
app.use("/order-item", orderitem_router_1.default);
app.use("/review", review_router_1.default);
// server
app.get("/", (req, res) => {
    res.send({
        message: "E-commerce server is running",
    });
});
exports.default = app;
