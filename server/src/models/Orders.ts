export class Orders {
  constructor(
    private id: number,
    private name: string,
    private delivery_date: Date,
  ) {}

  public getId():number{
    return this.id
  }
  public getName(): string {
    return this.name
  }
  public getDate(): Date {
    return this.delivery_date
  }
}