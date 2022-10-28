import { Request,Response } from "express";
import { OrderProductDataBase } from "../database/OrderProductDatabase";
import { OrderProduct } from "../models/OrderProduct";

export const createOrderProduct = async (req:Request, res:Response) => {
  let errorCode = 400;
  try {
    const { product_id,order_id,product_price,qty } = req.body

    if (!product_id || !order_id || !product_price || !qty) {
      errorCode = 422
      throw new Error("Passe as requisições corretamente");
    }


    const newOrder = new OrderProduct(
      Math.floor(Math.random() * 100),
      product_id,
      order_id,
      product_price,
      qty
    );

    const orderProductDatabase = new OrderProductDataBase();
    await orderProductDatabase.createOrderProduct(newOrder)

    res.status(201).send("Pedido registrado com sucesso!")
  } catch (error) {
    res.status(errorCode).send({
      message:error.message
    })
  }
}