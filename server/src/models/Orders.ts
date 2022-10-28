export class Orders {
  constructor(
    private id: number,
    private client_name: string,
    private delivery_date: Date,
  ) {}

  public getId():number{
    return this.id
  }
  public getClientName(): string {
    return this.client_name
  }
  public getDate(): Date {
    return this.delivery_date
  }
}