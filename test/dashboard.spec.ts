import { expect, test } from '@playwright/test'

test('display day orders amount metrics', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  await page.waitForTimeout(2000)

  expect(page.getByText('20', { exact: true })).toBeVisible()
  expect(page.getByText('20', { exact: true })).toBeVisible()
})
