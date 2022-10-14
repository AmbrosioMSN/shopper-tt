export class Product {
  constructor(
    private id: number,
    private name: string,
    private price: string,
    private qty_stock: number
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
  public getQty(): number {
    return this.qty_stock
  }
}