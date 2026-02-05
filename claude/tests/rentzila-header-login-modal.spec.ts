import { test, expect } from '@playwright/test';
import { LoginModalPage } from '../pages/LoginModalPage';

test('rentzila-header-login-modal - Verify login button and modal functionality', async ({ page }) => {
  const loginModalPage = new LoginModalPage(page);

  // Step 1: Visit the home page
  await loginModalPage.goto();

  // Step 2: Verify that the "Вхід" button is displayed in the website header
  await expect(loginModalPage.loginButton).toBeVisible();
  await expect(loginModalPage.loginButton).toHaveText('Вхід');

  // Step 3: Click on the "Вхід" button
  await loginModalPage.clickLoginButton();

  // Step 4: Verify that the login modal window is displayed
  await expect(loginModalPage.loginModal).toBeVisible();
  await expect(loginModalPage.authorizationContainer).toBeVisible();

  // Step 5: Verify that the login modal contains a login form
  await expect(loginModalPage.loginForm).toBeVisible();
  
  // Verify form elements are present
  await expect(loginModalPage.emailInput).toBeVisible();
  await expect(loginModalPage.passwordInput).toBeVisible();
  await expect(loginModalPage.submitButton).toBeVisible();

  // Step 6: Verify that the modal window is displayed above the page content
  // (overlay is present and background is not interactive)
  const hasOverlay = await loginModalPage.isModalOverlayPresent();
  expect(hasOverlay).toBeTruthy();

  const isBackgroundNonInteractive = await loginModalPage.isBackgroundNonInteractive();
  expect(isBackgroundNonInteractive).toBeTruthy();
});
