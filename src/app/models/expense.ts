export class Expense {
  private id: number;
  name: string;
  amount: number;

  constructor(name: string, amount: number, id: number = 0) {
    this.id = id;
    this.name = name;
    this.amount = amount;
  }

  getId(): number {
    return this.id;
  }
}
