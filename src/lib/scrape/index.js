import puppeteer from 'puppeteer';

const scrape = async (url) => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto(url);
  const html = await page.content();
  await page.close();
  await browser.close();
  return html;
};

export default scrape;
