import { test, expect } from '@playwright/test';
import { RentzilaHomePage } from '../pages/rentzilaHomePage';

test('rentzila-header-catalog-menu: catalog header menu behavior', async ({ page }) => {
  const homePage = new RentzilaHomePage(page);
  const homeUrl = 'https://dev.rentzila.com.ua/';

  // 1. Visit the home page
  await homePage.goto();
  await expect(page).toHaveURL(homeUrl);

  // 2. Verify that the Catalog item is displayed in the website header.
  await expect(homePage.catalogTrigger).toBeVisible();

  // 3. Click on the Catalog item in the header.
  await homePage.openCatalog();

  // 4. Verify that the catalog dropdown menu is displayed.
  await expect(homePage.catalogMenu).toBeVisible();

  // 5. Verify that the «Спецтехніка» menu item is displayed in the catalog menu.
  await expect(homePage.catalogItemSpecial).toBeVisible();

  // 6. Verify that the «Послуги» menu item is displayed in the catalog menu.
  await expect(homePage.catalogItemServices).toBeVisible();

  // Extra: ensure there are exactly two parent items in the catalog (Спецтехніка, Послуги)
  const parents = homePage.catalogMenu.locator('.Catalog_parent__k_4MP');
  await expect(parents).toHaveCount(2);
});

