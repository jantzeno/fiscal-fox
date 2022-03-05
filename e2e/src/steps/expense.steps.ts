import { Before, Given, Then, When } from 'cucumber';
import { AuthPage } from '../pages/auth.po';
import { ExpensePage } from '../pages/expense.po';

const chaiAsExpected = require('chai').use(require('chai-as-promised'));
const expect = chaiAsExpected.expect;

let expensePage: ExpensePage;
let authPage: AuthPage;

Before(() => {
  expensePage = new ExpensePage();
  authPage = new AuthPage();
});

// Givens

Given('I am an authenticated expense user', async () => {
  expect(await authPage.login()).to.be.true;
});

Given('The budget is displayed', async () => {
  await expensePage.navigateToBudgetDetails();
  expect(await expensePage.seeExpenseTable()).to.be.true;
});

Given('I navigate to the new expense form', async () => {
  await expensePage.navigateToNewExpense();
});

Given('I navigate to the edit expense form', async () => {
  await expensePage.navigateToEditExpense();
});

Given('I navigate to the edit expense form to delete a expense', async () => {
  await expensePage.navigateToDeleteExpense();
});

// Thens

Then('I see the new expense form', async () => {
  expect(await expensePage.seeExpenseForm()).to.be.true;
});

Then('I see the edit expense form', async () => {
  expect(await expensePage.seeExpenseForm()).to.be.true;
});

Then('I see the new expense in the budget', async () => {
  await expensePage.navigateToBudgetDetails();
  expect(await expensePage.getCurrentUrl()).to.include('budgets/details');
  expect(await expensePage.seeNewExpense()).to.be.true;
});

Then('I see the updated expense in the budget', async () => {
  await expensePage.navigateToBudgetDetails();
  expect(await expensePage.getCurrentUrl()).to.include('budgets/details');
  expect(await expensePage.seeUpdatedExpense()).to.be.true;
});

Then('The expense is deleted', async () => {
  await expensePage.navigateToBudgetDetails();
  expect(await expensePage.getCurrentUrl()).to.include('budgets/details');
  expect(await expensePage.seeDeletedExpense()).to.be.false;
});

// Whens

When('I click the new expense button', async () => {
  await expensePage.clickNewExpenseButton();
});

When('I click the delete expense button', async () => {
  await expensePage.clickDeleteExpenseButton();
});

When('I complete the new expense form', async () => {
  await expensePage.filloutCreateExpenseForm();
});

When('I complete the edit expense form', async () => {
  await expensePage.filloutEditExpenseForm();
});
