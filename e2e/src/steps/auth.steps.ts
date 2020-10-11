import { Given, Then, When } from 'cucumber';
import { AuthPage } from '../pages/auth.po';

const chaiAsExpected = require('chai').use(require('chai-as-promised'));
const expect = chaiAsExpected.expect;

const authPage: AuthPage = new AuthPage();

Given(/^I navigate to the login page$/, async () => {
  await authPage.navigatetoLogin();
});

// Whens

When(/^I click the register button$/, async () => {
  await authPage.clickRegisterButton();
});

// Thens

Then(/^I see the login form$/, async () => {
  expect(await authPage.getLoginForm()).to.be.true;
});

Then(/^I navigate to the registration page$/, async () => {
  expect(await authPage.getRegisterForm()).to.be.true;
});
