import { BasePage } from './base.po';

export class BudgetPage extends BasePage {
  private dashboardUrl = 'http://localhost:4200/dashboard';
  private newBudgetUrl = 'http://localhost:4200/budgets/new';
  private updateBudgetUrl = 'http://localhost:4200/budgets/edit/1';
  private deleteBudgetUrl = 'http://localhost:4200/budgets/edit/2';
  private newBudgetButton = '#new-btn';
  private createBudgetButton = '#create-btn';
  private updateBudgetButton = '#update-btn';
  private deleteBudgetButton = '#delete-btn';
  private budgetForm = '.budget-form';
  private budgetTable = '#budget-table';
  private newBudgetName = 'Software Upgrade';
  private newBudgetAmount = '1200';
  private updatedBudgetName = 'Hardware Upgrade';
  private deletedBudgetName = 'Christmas Party';

  async clickNewBudgetButton(): Promise<void> {
    await this.clickOn(this.newBudgetButton);
  }

  async clickDeleteBudgetButton(): Promise<void> {
    await this.clickOn(this.deleteBudgetButton);
  }

  async filloutCreateBudgetForm(): Promise<void> {
    await this.enterValuesInInputField('#name', this.newBudgetName);
    await this.enterValuesInInputField('#amount', this.newBudgetAmount);
    await this.clickOn(this.createBudgetButton);
  }

  async filloutEditBudgetForm(): Promise<void> {
    await this.clearValuesInInputField('#name');
    await this.enterValuesInInputField('#name', this.updatedBudgetName);
    await this.clickOn(this.updateBudgetButton);
  }

  async navigateToDashboard(): Promise<void> {
    await this.navigateToUrl(this.dashboardUrl);
  }

  async navigateToNewBudget(): Promise<void> {
    await this.navigateToUrl(this.newBudgetUrl);
  }

  async navigateToEditBudget(): Promise<void> {
    await this.navigateToUrl(this.updateBudgetUrl);
  }

  async navigateToDeleteBudget(): Promise<void> {
    await this.navigateToUrl(this.deleteBudgetUrl);
  }

  async seeNewBudget(): Promise<boolean> {
    return await this.isLinkPresent(this.newBudgetName);
  }

  async seeUpdatedBudget(): Promise<boolean> {
    return await this.isLinkPresent(this.updatedBudgetName);
  }

  async seeDeletedBudget(): Promise<boolean> {
    return await this.isLinkStale(this.deletedBudgetName);
  }

  async seeBudgetForm(): Promise<boolean> {
    return await this.isElementVisible(this.budgetForm);
  }

  async seeBudgetTable(): Promise<boolean> {
    return await this.isElementVisible(this.budgetTable);
  }
}
