import express, { Application, Request, Response } from "express";
import cors from "cors";
import userRoutes from "../src/app/modules/user/user.router";
import productRoutes from "../src/app/modules/product/product.route";
import shopRoutes from "../src/app/modules/shop/shop.router";
import orderRoutes from "../src/app/modules/order/order.route"
import orderItemRoutes from "../src/app/modules/orderItem/orderitem.router"
import reviewRoutes from "../src/app/modules/reviews/review.router"
const app: Application = express();

// middleware
app.use(cors());
app.use(express.json());
// router
app.use("/users", userRoutes);
app.use("/products", productRoutes);
app.use("/shop", shopRoutes);
app.use("/order",orderRoutes);
app.use("/order-item",orderItemRoutes);
app.use("/review",reviewRoutes);

// server
app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "E-commerce server is running",
  });
});

export default app;
