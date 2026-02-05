import type { Page, Locator } from '@playwright/test';

export class RentzilaHomePage {
  readonly page: Page;
  readonly logo: Locator;
  readonly navLinks: Locator;
  readonly catalogTrigger: Locator;
  readonly catalogMenu: Locator;
  readonly catalogItemSpecial: Locator;
  readonly catalogItemServices: Locator;

  constructor(page: Page) {
    this.page = page;
    // Header logo discovered via MCP: div[data-testid="logo"] wrapped in header link.
    // Multiple elements can share this test id (e.g. desktop + mobile), so use the first one.
    this.logo = page.getByTestId('logo').first();
    // Header navigation links discovered via MCP
    this.navLinks = page.locator('header .Navbar_navigation__rP7IA a.Navbar_link__UhyJF');
    // Catalog trigger (icon + label) discovered via MCP
    this.catalogTrigger = page.locator('header .NavbarCatalog_wrapper__kVmUY');
    // Catalog dropdown container
    this.catalogMenu = page.locator('.Catalog_container__0jVbE');
    // Catalog items: «Спецтехніка» and «Послуги»
    this.catalogItemSpecial = this.catalogMenu.locator('.Catalog_parent__k_4MP', { hasText: 'Спецтехніка' });
    this.catalogItemServices = this.catalogMenu.locator('.Catalog_parent__k_4MP', { hasText: 'Послуги' });
  }

  async goto() {
    await this.page.goto('https://dev.rentzila.com.ua/');
  }

  async clickFirstNavLink() {
    const firstNavLink = this.navLinks.first();
    // Ensure it is visible before clicking (helps across browsers / layouts)
    await firstNavLink.waitFor({ state: 'visible' });
    await firstNavLink.click({ force: true });
  }

  async openCatalog() {
    await this.catalogTrigger.click();
  }
}

