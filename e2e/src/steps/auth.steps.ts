import { Given, Then, When } from 'cucumber';
import { AuthPage } from '../pages/auth.po';

const chaiAsExpected = require('chai').use(require('chai-as-promised'));
const expect = chaiAsExpected.expect;

const authPage: AuthPage = new AuthPage();

// Givens

Given('I navigate to the login page', async () => {
  await authPage.navigateTo('login');
});

Given('I navigate to the register page', async () => {
  await authPage.navigateTo('register');
});

Given('I am an authenticated user', async () => {
  await authPage.login();
  expect(await authPage.seeBudgetTable()).to.be.true;
});

// Thens

Then('I see the login form', async () => {
  expect(await authPage.getForm('login')).to.be.true;
});

Then('I see the register form', async () => {
  expect(await authPage.getForm('register')).to.be.true;
});

Then('I see the login page', async () => {
  expect(await authPage.getCurrentUrl()).to.include('login');
});

Then('I see the logout page', async () => {
  expect(await authPage.getCurrentUrl()).to.include('logout');
});

Then('I see the dashboard page', async () => {
  expect(await authPage.seeBudgetTable()).to.be.true;
});

// Whens

When('I click the register button', async () => {
  await authPage.clickThis('register');
});

When('I click the login button', async () => {
  await authPage.clickThis('login');
});

When('I click the logout link', async () => {
  await authPage.clickThis('logout');
});

When('I complete the register form', async () => {
  await authPage.filloutRegisterForm();
});

When('I complete the login form', async () => {
  await authPage.filloutLoginForm();
});
