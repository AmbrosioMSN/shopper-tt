export class Product {
  constructor(
    private id: number,
    private name: string,
    private price: string,
    private stock_qty: number
  ) {}

  public getId(): number {
    return this.id
  }
  public getName(): string {
    return this.name
  }
  public getPrice(): string {
    return this.price
  }
  public getStockQty(): number {
    return this.stock_qty
  }
}