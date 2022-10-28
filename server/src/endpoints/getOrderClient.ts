import { Request,Response } from "express";
import { OrderDatabase } from "../database/OrderDatabase";

export const getOrderClient = async (req:Request, res:Response) => {
  let errorCode = 400;
  try {
    const name = String(req.query.name) 

    if (!name) {
      errorCode = 422
      throw new Error("Passe o parametro do cliente");
    }

    const orderDataBase = new OrderDatabase();
    const result = await orderDataBase.getOrderClient(name);

    if (result.length <= 0) {
      errorCode = 404
      throw new Error("Cliente não encontrado");
    }

    res.status(200).send({ Resultado: result })
  } catch (error) {
    res.status(errorCode).send({
      message:error.message
    })
  }
}