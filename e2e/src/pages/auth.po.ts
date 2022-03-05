import { BasePage } from './base.po';

export class AuthPage extends BasePage {
  private baseUrl = 'http://localhost:4200';
  private loginUrl = 'http://localhost:4200/auth/login';
  private registerUrl = 'http://localhost:4200/register';
  private loginForm = '.login-form';
  private registerForm = '.register-form';
  private loginButton = '#login-btn';
  private logoutLink = '#logout-link';
  private registerButton = '#register-btn';
  private budgetTable = '#budget-table';

  async clickThis(button: string): Promise<void> {
    if (button === 'login') {
      await this.clickOn(this.loginButton);
    }
    if (button === 'register') {
      await this.clickOn(this.registerButton);
    }
    if (button === 'logout') {
      await this.clickOn(this.logoutLink);
    }
  }

  async filloutLoginForm(): Promise<void> {
    await this.enterValuesInInputField('#username', 'boggis');
    await this.enterValuesInInputField('#password', 'farmer');
  }

  async filloutRegisterForm(): Promise<void> {
    let date = new Date();
    let time = new String(
      date.getHours().toString() + date.getMinutes().toString()
    );
    // Append current time to username and email for continuous testing
    // Otherwise, remove the testuser from the database on every test cycle
    let username = new String('testuser_'.concat(time.toString()));
    let email = new String(
      'test_'.concat(time.toString()).concat('@email.com')
    );
    await this.enterValuesInInputField('#username', username.toString());
    await this.enterValuesInInputField('#password', 'testpassword');
    await this.enterValuesInInputField('#email', email.toString());
    await this.clickOn('#budgetAnalyst');
  }

  async getCurrentUrl(): Promise<string> {
    return await super.getCurrentUrl();
  }

  async getForm(form: string): Promise<boolean> {
    if (form === 'login') {
      return await this.isElementVisible(this.loginForm);
    }
    if (form === 'register') {
      return await this.isElementVisible(this.registerForm);
    }
  }

  async login(): Promise<boolean> {
    await this.navigateToUrl(this.loginUrl);
    await this.filloutLoginForm();
    await this.clickThis('login');
    return this.seeBudgetTable();
  }

  async navigateTo(url: string): Promise<void> {
    if (url === 'base') {
      await this.navigateToUrl(this.baseUrl);
    }

    if (url === 'login') {
      await this.navigateToUrl(this.loginUrl);
    }

    if (url === 'register') {
      await this.navigateToUrl(this.registerUrl);
    }
  }

  async seeBudgetTable(): Promise<boolean> {
    return await this.isElementVisible(this.budgetTable);
  }
}
