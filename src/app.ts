import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRoutes from "../src/app/modules/user/user.router";
import productRoutes from "../src/app/modules/product/product.route";
const app:Application=express();

// middleware
app.use(cors())
app.use(express.json());
// router
app.use('/users', userRoutes)
app.use('/products', productRoutes);

// server
app.get('/',(req:Request,res:Response)=>{
    res.send({
        message:"E-commerce server is running"
    })
})

export default app;