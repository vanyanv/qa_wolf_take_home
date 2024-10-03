// EDIT THIS FILE TO COMPLETE ASSIGNMENT QUESTION 1
const { chromium } = require('playwright');

async function sortHackerNewsArticles() {
  // launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // go to Hacker News
  await page.goto('https://news.ycombinator.com/newest');

  // Fetch the first 100 articles
  const articles = await page.$$eval('.athing', (nodes) => {
    return nodes.slice(0, 100).map((article) => {
      const id = article.getAttribute('id'); // Each article has an 'id' which correlates with the post order

      return Number(id); // Convert the id to an number
    });
  });

  // Validate the articles are sorted by their IDs in descending order (newest to oldest)
  // let isSorted = true;
  // for (let i = 0; i < articles.length - 1; i++) {
  //   if (articles[i] < articles[i + 1]) {
  //     isSorted = false;
  //     break;
  //   }
  // }

  // if (isSorted) {
  //   console.log('Articles are correctly sorted from newest to oldest.');
  // } else {
  //   console.log('Articles are NOT sorted correctly.');
  // }
  console.log(articles.length);
}

(async () => {
  await sortHackerNewsArticles();
})();
