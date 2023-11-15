import { expect, test } from '@playwright/test';

test.describe('User Sync Tool e2e', () => {
  test('should fetch 10 random users on page load', async ({ page }) => {
    // Navigate to your Angular app's URL
    await page.goto('/');

    // Wait for the users to be loaded
    await page.waitForSelector('.user-card');

    // Count the number of user cards
    const userCount = await page.locator('.user-card').count();

    // Assert that 10 users are displayed
    expect(userCount).toBe(10);
  });

  test('Should add the first user to favourite', async ({ page }) => {
    await addToFavourite(page);
  });

  test('Should remove the first user added to favourite', async ({ page }) => {
    await addToFavourite(page);

    // click on Add to Favourite
    await page.click('.user-card:first-child .action-area button');

    // Wait for 0.6 second
    await page.waitForTimeout(600);

    // Count the number of user cards
    const userCount = await page.locator('.user-card').count();

    expect(userCount).toBe(0);
  });

  test('should update users list every 5 seconds with toggle', async ({
    page,
  }) => {
    await page.goto('/'); // Replace with your app's URL

    // Click on the toggle to start the interval
    await page.click('.toggle-switch');

    const initialFirstUser = await page.textContent(
      '.user-card:first-child .user-info',
    );

    // Wait for 5 seconds
    await page.waitForTimeout(5000);

    const newFirstUser = await page.textContent(
      '.user-card:first-child .user-info',
    );

    // Assert that the first user has changed
    expect(newFirstUser).not.toBe(initialFirstUser);

    // Assert that the total count of user cards remains 10
    const userCount = await page.locator('.user-card').count();
    expect(userCount).toBe(10);

    // Wait for 5 seconds
    await page.waitForTimeout(5000);

    const newSecondUser = await page.textContent(
      '.user-card:first-child .user-info',
    );

    // Assert that the first user has changed
    expect(newSecondUser).not.toBe(newFirstUser);

    // Assert that the total count of user cards remains 10
    const userCount2 = await page.locator('.user-card').count();
    expect(userCount2).toBe(10);
  });
});

async function addToFavourite(page) {
  // Navigate to your Angular app's URL
  await page.goto('/');

  // Wait for the users to be loaded
  await page.waitForSelector('.user-card');

  const infoFirstUser = await page.textContent(
    '.user-card:first-child .user-info',
  );

  // click on Add to Favourite
  await page.click('.user-card:first-child .action-area button');

  // Navigate to favourite page
  await page.click('.toolbar .navigation-buttons .nav-btn');

  // Wait for the users to be loaded
  await page.waitForSelector('.user-card');

  const favFirstUser = await page.textContent(
    '.user-card:first-child .user-info',
  );

  expect(favFirstUser).toBe(infoFirstUser);
}
