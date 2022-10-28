export class OrderProduct {
  constructor(
    private id: number,
    private product_id: number,
    private order_id: number,
    private product_price: string,
    private qty: number
  ) {}

  public getId():number{
    return this.id
  }
  public getIdProduct():number{
    return this.product_id
  }
  public getOrderId(): number{
    return this.order_id
  }
  public getPriceProduct(): string {
    return this.product_price
  }
  public getQty(): number {
    return this.qty
  }
}