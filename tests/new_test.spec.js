const {test, expect} = require('@playwright/test')

test('My first test', async ({page}) => {
    await page.goto('https://test-automation-community.vercel.app/')
    await expect(page).toHaveTitle('Airbnb')
}) 