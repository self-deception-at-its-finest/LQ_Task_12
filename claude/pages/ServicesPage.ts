import type { Page, Locator } from '@playwright/test';

export class ServicesPage {
  readonly page: Page;
  readonly servicesSection: Locator;
  readonly servicesSectionTitle: Locator;
  readonly servicesTabsContainer: Locator;
  readonly popularTab: Locator;
  readonly agriculturalTab: Locator;
  readonly constructionTab: Locator;
  readonly otherTab: Locator;

  constructor(page: Page) {
    this.page = page;
    
    // Services section selectors discovered via MCP
    this.servicesSection = page.locator('[data-testid="services"]');
    this.servicesSectionTitle = this.servicesSection.locator('[data-testid="title"]');
    this.servicesTabsContainer = page.locator('.RentzilaProposes_categories_list__cxa6m');
    
    // Service tabs discovered via MCP
    this.popularTab = page.locator('[data-testid="services__populyarni"]');
    this.agriculturalTab = page.locator('[data-testid="services__silskogospodarski"]');
    this.constructionTab = page.locator('[data-testid="services__budivelni"]');
    this.otherTab = page.locator('[data-testid="services__inshi"]');
  }

  /**
   * Navigate to the home page
   */
  async goto(): Promise<void> {
    await this.page.goto('https://dev.rentzila.com.ua/');
    await this.page.waitForLoadState('domcontentloaded');
  }

  /**
   * Scroll until the Services section is visible
   */
  async scrollToServicesSection(): Promise<void> {
    await this.servicesSection.scrollIntoViewIfNeeded();
    await this.page.waitForTimeout(500); // Wait for scroll to complete
  }

  /**
   * Get count of subsection tabs
   */
  async getSubsectionTabsCount(): Promise<number> {
    const tabs = this.servicesTabsContainer.locator('> div');
    return await tabs.count();
  }

  /**
   * Get all tab names
   */
  async getAllTabNames(): Promise<string[]> {
    const tabs = this.servicesTabsContainer.locator('> div');
    const count = await tabs.count();
    const names: string[] = [];
    
    for (let i = 0; i < count; i++) {
      const text = await tabs.nth(i).textContent();
      if (text) {
        names.push(text.trim());
      }
    }
    
    return names;
  }

  /**
   * Check if all tabs are visible and clickable
   */
  async areAllTabsVisibleAndClickable(): Promise<boolean> {
    const tabs = [
      this.popularTab,
      this.agriculturalTab,
      this.constructionTab,
      this.otherTab
    ];
    
    for (const tab of tabs) {
      const isVisible = await tab.isVisible();
      const isEnabled = await tab.isEnabled();
      
      if (!isVisible || !isEnabled) {
        return false;
      }
    }
    
    return true;
  }

  /**
   * Click on Agricultural tab
   */
  async clickAgriculturalTab(): Promise<void> {
    await this.agriculturalTab.click();
    await this.page.waitForTimeout(300);
  }

  /**
   * Click on Construction tab
   */
  async clickConstructionTab(): Promise<void> {
    await this.constructionTab.click();
    await this.page.waitForTimeout(300);
  }

  /**
   * Click on Other tab
   */
  async clickOtherTab(): Promise<void> {
    await this.otherTab.click();
    await this.page.waitForTimeout(300);
  }

  /**
   * Click on Popular tab
   */
  async clickPopularTab(): Promise<void> {
    await this.popularTab.click();
    await this.page.waitForTimeout(300);
  }
}
