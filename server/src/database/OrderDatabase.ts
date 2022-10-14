import { Orders } from "../models/Orders";
import { BaseDatabase } from "./BaseDatabase";

export class OrderDatabase extends BaseDatabase {
  public static TABLE_ORDER = "Orders";

  public async createOrder(order: Orders){
    await BaseDatabase.connection(OrderDatabase.TABLE_ORDER)
    .insert({
      id: order.getId(),
      name: order.getName(),
      delivery_date: order.getDate(),
    })
  }

  public async getOrderClient(id: number){
    const result = await BaseDatabase.connection(OrderDatabase.TABLE_ORDER)
    .where("name", "=", id)
    return result
  }
}