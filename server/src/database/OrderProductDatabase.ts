import { OrderProduct } from "../models/OrderProduct";
import { BaseDatabase } from "./BaseDatabase";

export class OrderProductDataBase extends BaseDatabase {
  public static TABLE_ORDER_PRODUCT = "Order_Products";

  public async createOrderProduct(order : OrderProduct){
    await BaseDatabase.connection(OrderProductDataBase.TABLE_ORDER_PRODUCT)
    .insert({
      id: order.getId(),
      product_id: order.getIdProduct(),
      order_id: order.getOrderId(),
      product_price: order.getPriceProduct(),
      qty: order.getQty()
    })
  }
}