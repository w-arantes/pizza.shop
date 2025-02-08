import { expect, test } from '@playwright/test'

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('US$ 20,00')).toBeVisible()
  expect(page.getByText('+1% compared to last month').first()).toBeVisible()
})

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('20', { exact: true }).first()).toBeVisible()
  expect(page.locator('div').filter({ hasText: /^20\+1% compared to last month$/ }).getByRole('paragraph')).toBeVisible()
})

test('display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('20', { exact: true }).first()).toBeVisible()
  expect(page.locator('div').filter({ hasText: /^20\+1% compared to last month$/ }).getByRole('paragraph')).toBeVisible()
})

test('display month revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('20', { exact: true }).first()).toBeVisible()
  expect(page.locator('div').filter({ hasText: /^20\+1% compared to last month$/ }).getByRole('paragraph')).toBeVisible()
})

