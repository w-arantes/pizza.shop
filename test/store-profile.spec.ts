import { expect, test } from '@playwright/test'

test('update profile successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Store profile' }).click()

  await page.getByLabel('Name').fill('Mock Pizza Shop')
  await page.getByLabel('Description').fill('Another description')
  await page.getByRole('button', { name: 'Save' }).click()

  await page.waitForLoadState('networkidle')
  await page.getByRole('button', { name: 'Close' }).click()
  await page.waitForTimeout(250)

  expect(page.getByRole('button', { name: 'Mock Pizza Shop' })).toBeVisible()
})
