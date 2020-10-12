import { BasePage } from './base.po';

export class ExpensePage extends BasePage {
  private budgetUrl = 'http://localhost:4200/budgets/details/1';
  private newExpenseUrl = 'http://localhost:4200/expenses/new/1';
  private updateExpenseUrl = 'http://localhost:4200/expenses/edit/1';
  private deleteExpenseUrl = 'http://localhost:4200/expenses/edit/2';
  private newExpenseButton = '#new-btn';
  private createExpenseButton = '#create-btn';
  private updateExpenseButton = '#update-btn';
  private deleteExpenseButton = '#delete-btn';
  private expenseForm = '.expense-form';
  private expenseTable = '#expense-table';
  private newExpenseName = 'Software Upgrade';
  private newExpenseAmount = '200';
  private updatedExpenseName = 'Hardware Upgrade';
  private deletedExpenseName = 'Copier Lease ';

  async clickNewExpenseButton(): Promise<void> {
    await this.clickOn(this.newExpenseButton);
  }

  async clickDeleteExpenseButton(): Promise<void> {
    await this.clickOn(this.deleteExpenseButton);
  }

  async filloutCreateExpenseForm(): Promise<void> {
    await this.enterValuesInInputField('#name', this.newExpenseName);
    await this.enterValuesInInputField('#amount', this.newExpenseAmount);
    await this.clickOn(this.createExpenseButton);
  }

  async filloutEditExpenseForm(): Promise<void> {
    await this.clearValuesInInputField('#name');
    await this.enterValuesInInputField('#name', this.updatedExpenseName);
    await this.clickOn(this.updateExpenseButton);
  }

  async navigateToBudgetDetails(): Promise<void> {
    await this.navigateToUrl(this.budgetUrl);
  }

  async navigateToNewExpense(): Promise<void> {
    await this.navigateToUrl(this.newExpenseUrl);
  }

  async navigateToEditExpense(): Promise<void> {
    await this.navigateToUrl(this.updateExpenseUrl);
  }

  async navigateToDeleteExpense(): Promise<void> {
    await this.navigateToUrl(this.deleteExpenseUrl);
  }

  async seeNewExpense(): Promise<boolean> {
    return await this.isTagWithTextPresent('td', this.newExpenseName);
  }

  async seeUpdatedExpense(): Promise<boolean> {
    return await this.isTagWithTextPresent('td', this.updatedExpenseName);
  }

  async seeDeletedExpense(): Promise<boolean> {
    return await this.isTagWithTextStale('td', this.deletedExpenseName);
  }

  async seeExpenseForm(): Promise<boolean> {
    return await this.isElementVisible(this.expenseForm);
  }

  async seeExpenseTable(): Promise<boolean> {
    return await this.isElementVisible(this.expenseTable);
  }
}
