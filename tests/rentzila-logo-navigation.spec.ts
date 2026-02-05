import { test, expect } from '@playwright/test';
import { RentzilaHomePage } from '../pages/rentzilaHomePage';

test('rentzila-logo-navigation: logo and header navigation behavior', async ({ page }) => {
  const homePage = new RentzilaHomePage(page);
  const homeUrl = 'https://dev.rentzila.com.ua/';

  // Visit https://dev.rentzila.com.ua/;
  await homePage.goto();

  // Verify the Rentzila logo is displayed in the website header;
  await expect(homePage.logo).toBeVisible();

  // Click on any navigation link (for example, a category or service page) to navigate to a non-home page;
  await homePage.clickFirstNavLink();

  // Verify the current URL is not equal to the home page URL;
  await expect(page).not.toHaveURL(homeUrl);

  // Verify the Rentzila logo is still displayed in the website header;
  await expect(homePage.logo).toBeVisible();

  // Click on the Rentzila logo;
  await homePage.logo.click();

  // Verify the user is redirected to the home page;
  // Verify the current URL equals https://dev.rentzila.com.ua/.
  await expect(page).toHaveURL(homeUrl);
});

