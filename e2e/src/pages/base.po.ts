import { element, by, browser, ExpectedConditions } from 'protractor';
import { protractor } from 'protractor/built/ptor';

export class BasePage {
  _defaultTimeout: 2000;

  /**
   * Navigates to the url
   * @param url - location to navigate to ex.: http://localhost:4200
   */
  async navigateToUrl(url: string): Promise<void> {
    await browser.waitForAngularEnabled(false);
    await browser.get(url);
  }

  /**
   * Get the current url
   */
  async getCurrentUrl(): Promise<string> {
    return await browser.wait(browser.getCurrentUrl(), this._defaultTimeout);
  }

  /**
   * Returns a promise if element is visible
   * @param selector
   * @param elementText
   */
  async isElementVisible(
    selector: string,
    elementText?: string
  ): Promise<boolean> {
    const currentElement = elementText
      ? element(by.cssContainingText(selector, elementText))
      : element(by.css(selector));
    await browser.wait(
      ExpectedConditions.visibilityOf(currentElement),
      this._defaultTimeout
    );
    return currentElement.isDisplayed();
  }

  /**
   * Returns a promise if link is found
   * @param linkText
   */
  async isLinkPresent(linkText: string): Promise<boolean> {
    const _element = element(by.linkText(linkText));
    browser.wait(ExpectedConditions.presenceOf(_element), this._defaultTimeout);
    return _element.isPresent();
  }

  /**
   * Returns a promise if link is not found
   * @param linkText
   */
  async isLinkStale(linkText: string): Promise<boolean> {
    const _element = element(by.linkText(linkText));
    browser.wait(
      ExpectedConditions.stalenessOf(_element),
      this._defaultTimeout
    );
    return _element.isPresent();
  }

  /**
   * Returns a promise if tag with text is found
   * @param tag
   * @param text
   */
  async isTagWithTextPresent(tag: string, text: string): Promise<boolean> {
    const _elements = element.all(by.tagName(tag));
    const found = _elements.filter(async (e) => (await e.getText()) === text);
    if (found) {
      browser.wait(
        ExpectedConditions.presenceOf(found.get(0)),
        this._defaultTimeout
      );
      return found.get(0).isPresent();
    } else {
      return false;
    }
  }

  /**
   * Returns a promise if tag with text is not found
   * @param tag
   * @param text
   */
  async isTagWithTextStale(tag: string, text: string): Promise<boolean> {
    const _elements = element.all(by.tagName(tag));
    const found = _elements.filter(async (e) => (await e.getText()) === text);
    if (found) {
      browser.wait(
        ExpectedConditions.stalenessOf(found.get(0)),
        this._defaultTimeout
      );
      return found.get(0).isPresent();
    } else {
      return false;
    }
  }

  /**
   * Clears the values from the element
   * @param selector
   */
  async clearValuesInInputField(selector: string): Promise<void> {
    const currentElement = element(by.css(selector));
    await browser.wait(ExpectedConditions.visibilityOf(currentElement));
    await currentElement.clear();
  }

  /**
   * Inputs values into element if visible
   * @param selector
   * @param inputValue
   */
  async enterValuesInInputField(
    selector: string,
    inputValue: any
  ): Promise<void> {
    const currentElement = element(by.css(selector));
    await browser.wait(ExpectedConditions.visibilityOf(currentElement));
    await currentElement.sendKeys(inputValue);
  }

  /**
   * Click on the element if clickable
   * @param selector
   */
  async clickOn(selector: string): Promise<void> {
    const clickElement = element(by.css(selector));
    await browser.wait(
      ExpectedConditions.elementToBeClickable(clickElement),
      this._defaultTimeout
    );
    await clickElement.click();
  }
}
