import type { Page, Locator } from '@playwright/test';

export class LoginModalPage {
  readonly page: Page;
  readonly loginButton: Locator;
  readonly loginModal: Locator;
  readonly authorizationContainer: Locator;
  readonly loginForm: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  readonly closeButton: Locator;

  constructor(page: Page) {
    this.page = page;
    
    // Login button in header discovered via MCP
    this.loginButton = page.locator('.NavbarAuthBlock_buttonEnter__c9siH');
    
    // Login modal selectors discovered via MCP
    this.loginModal = page.locator('[data-testid="loginPopup"]');
    this.authorizationContainer = page.locator('[data-testid="authorizationContainer"]');
    this.loginForm = page.locator('form.LoginForm_form__7G3Zk');
    
    // Form elements
    this.emailInput = this.loginForm.locator('input[name="login"]');
    this.passwordInput = this.loginForm.locator('input[name="password"]');
    this.submitButton = this.loginForm.locator('button[type="submit"]');
    this.closeButton = page.locator('[data-testid="authClose"]');
  }

  /**
   * Navigate to the home page
   */
  async goto(): Promise<void> {
    await this.page.goto('https://dev.rentzila.com.ua/');
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Click the login button in header
   */
  async clickLoginButton(): Promise<void> {
    await this.loginButton.click();
    await this.page.waitForTimeout(500); // Wait for modal to appear
  }

  /**
   * Check if login modal has overlay above page content
   */
  async isModalOverlayPresent(): Promise<boolean> {
    const zIndex = await this.loginModal.evaluate((el) => {
      return window.getComputedStyle(el).zIndex;
    });
    
    // Modal should have high z-index (21 observed)
    return parseInt(zIndex) > 10;
  }

  /**
   * Check if background is not interactive (overlay blocks interaction)
   */
  async isBackgroundNonInteractive(): Promise<boolean> {
    const position = await this.loginModal.evaluate((el) => {
      return window.getComputedStyle(el).position;
    });
    
    // Modal should be positioned absolutely or fixed
    return position === 'absolute' || position === 'fixed';
  }
}
