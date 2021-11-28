import { resolve, join } from 'path'
import { test, expect } from '@playwright/test'

const ROOT_PATH = resolve(__dirname, '..', 'screenshots')

test('job board test', async ({ page, baseURL }) => {
  await page.goto(baseURL + '/')

  // Step 1 - Is Homepage working
  await expect(page.locator('h2').locator('text=Job Board')).toBeVisible()

  // Step 2 - Job List has items
  const jobListCount = await page.locator('ul#job-list > li').count()
  await expect(jobListCount).toBeGreaterThan(0)

  // alternative
  const jobListItem = await page.locator('ul#job-list > li')
  await jobListItem.evaluateAll((lis, min) => lis.length >= min, 0)

  // Step 3 - Create a screenshot of homepage
  await page.screenshot({ path: join(ROOT_PATH, 'index.png') })

  // Step 4 - Test if routing to detail page is working
  // Extract job title
  const jobTitle = await page.locator('ul#job-list > li:first-child p').first().textContent()

  // Extract href to get link
  const jobLink = await page.locator('ul#job-list > li:first-child > a')
  const href = await jobLink.getAttribute('href')

  // Step 5 - Click on the link and route to the detail page
  await jobLink.click()

  // Step 6 - Check if link is correct
  await expect(page).toHaveURL(href)

  // Step 7 - Test if the title is the same as from the list
  await expect(page.locator('h1')).toHaveText(jobTitle)

  // Step 8 - Create a screenshot of detail page
  await page.screenshot({ path: join(ROOT_PATH, 'detail.png') })
})
