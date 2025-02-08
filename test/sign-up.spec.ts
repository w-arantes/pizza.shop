import { expect, test } from '@playwright/test'

test('navigate to login page', async ({ page }) => {
  await page.goto('/sign-in', { waitUntil: 'networkidle' })
  await page.getByRole('link', { name: 'New establishment' }).click()

  expect(page.url()).toContain('/sign-up')
})

test('sign up successfully', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByLabel('Name of establishment').fill('Pizza Shop')
  await page.getByLabel('Your name').fill('John Doe')
  await page.getByLabel('Your email').fill('johndoe@example.com')
  await page.getByLabel('Your cell phone').fill('123456789')
  await page.getByRole('button', { name: 'Complete registration' }).click()

  const toast = page.getByText('Restaurant registered successfully!')

  await expect(toast).toBeVisible()
})

test('sign up with error', async ({ page }) => {
  await page.goto('/sign-up', { waitUntil: 'networkidle' })
  await page.getByLabel('Name of establishment').fill('Invalid Name')
  await page.getByLabel('Your name').fill('John Doe')
  await page.getByLabel('Your email').fill('johndoe@example.com')
  await page.getByLabel('Your cell phone').fill('123456789')
  await page.getByRole('button', { name: 'Complete registration' }).click()

  const toast = page.getByText('Error registering restaurant.')

  await expect(toast).toBeVisible()
})
