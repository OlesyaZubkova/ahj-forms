import puppeteer from 'puppeteer';

jest.setTimeout(30000);

describe('button test', () => {
  test('should check button`s work', async () => {
    let browser = null;
    let page = null;
    const baseUrl = 'http://localhost:8080';
    browser = await puppeteer.launch({
      // headless: false,
      // slowMo: 100,
      // devtools: true,
    });
    page = await browser.newPage();
    await page.goto(baseUrl);
    const btn = await page.$('[class=toggle-btn]');
    btn.click();
    await page.waitForSelector('[class=popover]');
    await browser.close();
  });
});
