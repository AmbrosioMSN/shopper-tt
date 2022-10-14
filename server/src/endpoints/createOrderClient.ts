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

    // const data_nasc_americana = date.split("/").reverse().join("-")

    const newClient = new Orders(
      Math.floor(Math.random() * 100),
      name,
      date
    )

    const orderDataBase = new OrderDatabase();
    await orderDataBase.createOrder(newClient)

    res.status(201).send("Cliente registrado com sucesso!")
  } catch (error) {
    res.status(errorCode).send({
      message:error.message
    })
  }
}