import { test, expect } from '@playwright/test';
import { ServicesPage } from '../pages/ServicesPage';

test('check-poslugi_section - Verify services section and tabs', async ({ page }) => {
  const servicesPage = new ServicesPage(page);

  // Step 1: Visit the home page
  await servicesPage.goto();

  // Step 2: Scroll the page down until the Services section is visible
  await servicesPage.scrollToServicesSection();

  // Step 3: Verify that the section title "Послуги" is displayed on the page
  await expect(servicesPage.servicesSectionTitle).toBeVisible();
  await expect(servicesPage.servicesSectionTitle).toHaveText('Послуги');

  // Step 4: Verify that the services section contains four subsection tabs
  const tabsCount = await servicesPage.getSubsectionTabsCount();
  expect(tabsCount).toBe(4);

  // Step 5: Verify that the following subsection tabs are displayed
  const tabNames = await servicesPage.getAllTabNames();
  expect(tabNames).toContain('Популярні');
  expect(tabNames).toContain('Сільськогосподарські');
  expect(tabNames).toContain('Будівельні');
  expect(tabNames).toContain('Інші');

  // Verify each tab individually
  await expect(servicesPage.popularTab).toBeVisible();
  await expect(servicesPage.agriculturalTab).toBeVisible();
  await expect(servicesPage.constructionTab).toBeVisible();
  await expect(servicesPage.otherTab).toBeVisible();

  // Step 6: Verify that each subsection tab is visible and clickable
  const areAllTabsClickable = await servicesPage.areAllTabsVisibleAndClickable();
  expect(areAllTabsClickable).toBeTruthy();

  // Additional verification: Click on each tab to ensure they are clickable
  await servicesPage.clickAgriculturalTab();
  await servicesPage.clickConstructionTab();
  await servicesPage.clickOtherTab();
  await servicesPage.clickPopularTab();
});
