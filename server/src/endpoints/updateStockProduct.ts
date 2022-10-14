import { Request,Response } from "express";
import { ProductDatabase } from "../database/ProductDatabase";

export const updateStockProduct = async (req:Request,res:Response) => {
  let errorCode = 400;

  try {
    const { id,qty } = req.body

    if (!id || !qty) {
      errorCode = 422
      throw new Error("Passe as requisições corretamente");
    }

    const productDatabase = new ProductDatabase();
    await productDatabase.updateProduct(qty,id);

    res.status(200).send("Produtos debitados com sucesso!")
  } catch (error) {
    res.status(errorCode).send({
      message:error.message
    })
  }
}