import { Product } from "../models/Product";
import { BaseDatabase } from "./BaseDatabase";

export class ProductDatabase extends BaseDatabase {
  public static TABLE_PRODUCT = "Product";

  public async getProductList(itensProducts: number){
    const result = await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCT)
    .limit(10)
    .offset(itensProducts || 1)
    return result
  }

  public async getProduct(idProduct:number){
    const result = await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCT)
    .where("id", "=", idProduct)
    return result
  }

  public async updateProduct(newQty: number, id:number){
    await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCT)
    .update("qty_stock", newQty)
    .where("id", "=", id)
  }
}