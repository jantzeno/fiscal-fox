import { register } from 'ts-node';
import { BasePage } from './base.po';

export class AuthPage extends BasePage {
  private baseUrl = 'http://localhost:4200';
  private loginForm = '.login-form';
  private registerForm = '.register-form';
  private loginButton = 'login-btn';
  private registerButton = 'register-btn';

  async getLoginForm(): Promise<boolean> {
    return await this.isElementVisible(this.loginForm);
  }

  async getRegisterForm(): Promise<boolean> {
    return await this.isElementVisible(this.registerForm);
  }

  async navigatetoLogin(): Promise<void> {
    await this.navigateToUrl(this.baseUrl);
  }

  async clickRegisterButton(): Promise<void> {
    await this.clickButton(this.registerButton);
  }

  async navigateToRegistration(): Promise<void> {
    await this.navigateToUrl(this.registerForm);
  }
}
