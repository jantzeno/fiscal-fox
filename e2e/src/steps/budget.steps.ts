import { Before, Given, Then, When } from 'cucumber';
import { AuthPage } from '../pages/auth.po';
import { BudgetPage } from '../pages/budget.po';

const chaiAsExpected = require('chai').use(require('chai-as-promised'));
const expect = chaiAsExpected.expect;

let budgetPage: BudgetPage;
let authPage: AuthPage;

Before(() => {
  budgetPage = new BudgetPage();
  authPage = new AuthPage();
});

// Givens

Given('I am an authenticated budget user', async () => {
  expect(await authPage.login()).to.be.true;
});

Given('The dashboard is displayed', async () => {
  expect(await budgetPage.seeBudgetTable()).to.be.true;
});

Given('I navigate to the new budget form', async () => {
  await budgetPage.navigateToNewBudget();
});

Given('I navigate to the edit budget form', async () => {
  await budgetPage.navigateToEditBudget();
});

Given('I navigate to the edit budget form to delete a budget', async () => {
  await budgetPage.navigateToDeleteBudget();
});

// Thens

Then('I see the new budget form', async () => {
  expect(await budgetPage.seeBudgetForm()).to.be.true;
});

Then('I see the edit budget form', async () => {
  expect(await budgetPage.seeBudgetForm()).to.be.true;
});

Then('I see the new budget on the dashboard', async () => {
  await budgetPage.navigateToDashboard();
  expect(await budgetPage.getCurrentUrl()).to.include('dashboard');
  expect(await budgetPage.seeNewBudget()).to.be.true;
});

Then('I see the updated budget on the dashboard', async () => {
  await budgetPage.navigateToDashboard();
  expect(await budgetPage.getCurrentUrl()).to.include('dashboard');
  expect(await budgetPage.seeUpdatedBudget()).to.be.true;
});

Then('The budget is deleted', async () => {
  await budgetPage.navigateToDashboard();
  expect(await budgetPage.getCurrentUrl()).to.include('dashboard');
  expect(await budgetPage.seeDeletedBudget()).to.be.false;
});

// Whens

When('I click the new budget button', async () => {
  await budgetPage.clickNewBudgetButton();
});

When('I click the delete budget button', async () => {
  await budgetPage.clickDeleteBudgetButton();
});

When('I complete the new budget form', async () => {
  await budgetPage.filloutCreateBudgetForm();
});

When('I complete the edit budget form', async () => {
  await budgetPage.filloutEditBudgetForm();
});
