const puppeteer = require("puppeteer");
const fs = require("fs");
const uuid = require("uuid/v1");

const timer = require("./timer");

const getScreenshot = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://developers.google.com/web/tools/puppeteer");
  await page.screenshot({ path: `files/screenshots/puppeteer-${uuid()}.png` });
  await browser.close();
};

const getPdf = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://developers.google.com/web/tools/puppeteer");
  await page.pdf({ path: `files/pdfs/puppeteer-${uuid()}.pdf`, format: "A4" });
  await browser.close();
};

const getInfo = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://developers.google.com/web/tools/puppeteer");
  const info = await page.evaluate(() => {
    return JSON.stringify({
      title: document.title
    });
  });
  fs.writeFile(`files/txts/info-${uuid()}.txt`, info, err => {
    if (err) console.error(err);
  });
  await browser.close();
};

timer("getScreenshot", getScreenshot);
timer("getPdf", getPdf);
timer("getInfo", getInfo);
