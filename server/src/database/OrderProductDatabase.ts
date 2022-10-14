import { OrderProduct } from "../models/OrderProduct";
import { BaseDatabase } from "./BaseDatabase";

export class OrderProductDataBase extends BaseDatabase {
  public static TABLE_ORDER_PRODUCT = "Order_Product";

  public async createOrderProduct(order : OrderProduct){
    await BaseDatabase.connection(OrderProductDataBase.TABLE_ORDER_PRODUCT)
    .insert({
      id: order.getId(),
      id_product: order.getIdProduct(),
      name_product: order.getNameProduct(),
      name_client: order.getNameClient(),
      price_product: order.getPriceProduct(),
      delivery_date: order.getDate(),
      qty: order.getQty()
    })
  }
}