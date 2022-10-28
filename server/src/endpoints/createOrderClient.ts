import { Request,Response } from "express";
import { OrderDatabase } from "../database/OrderDatabase";
import { Orders } from "../models/Orders";

export const createOrderClient = async (req:Request, res:Response) => {
  let errorCode = 400;
  try {
    const { name,date } = req.body

    if (!date || !name) {
      errorCode = 422
      throw new Error("Passe as requisições corretamente");
    }

    const id = Math.floor(Math.random() * 100)

    const newOrder = new Orders(
      id,
      name,
      date
    )

    const orderDataBase = new OrderDatabase();
    await orderDataBase.createOrder(newOrder)

    res.status(201).send({ Resultado:"Pedido registrado com sucesso!", IdOrder:id })
  } catch (error) {
    res.status(errorCode).send({
      message:error.message
    })
  }
}