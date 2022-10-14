import { Request,Response } from 'express';
import { ProductDatabase } from '../database/ProductDatabase';

export const getProduts = async (req:Request, res:Response) =>{
  let errorCode = 400;
  try {
    const itensProducts = Number(req.query.page)

    if (!itensProducts) {
      errorCode = 422
      throw new Error("Passe as requisições corretamente");
    };

    const productDatabase = new ProductDatabase();
    const result = await productDatabase.getProductList(itensProducts);

    res.status(200).send(result)
  } catch (error) {
    res.status(errorCode).send({
      message:error.message
    })
  }
}