export class OrderProduct {
  constructor(
    private id: number,
    private id_product: number,
    private name_product: string,
    private name_client: string,
    private price_product: string,
    private delivery_date: Date,
    private qty: number
  ) {}

  public getId():number{
    return this.id
  }
  public getIdProduct():number{
    return this.id_product
  }
  public getNameProduct(): string {
    return this.name_product
  }
  public getNameClient(): string {
    return this.name_client
  }
  public getPriceProduct(): string {
    return this.price_product
  }
  public getDate(): Date {
    return this.delivery_date
  }
  public getQty(): number {
    return this.qty
  }
}