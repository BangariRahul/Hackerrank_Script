const puppeteer = require("puppeteer");

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: false, slowMO: true, defaultViewport: null, args: ["--start-maximized"] });
    const browserPages = await browser.pages();
    const page = browserPages[0];

    await page.goto("https://www.google.com/");

    await page.waitForSelector("textarea#APjFqb.gLFyf", { visible: true });
    await page.type("textarea#APjFqb.gLFyf", "hackerrank.com");

    await page.keyboard.press("Enter");

    await page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md", { visible: true });
    await page.click("h3.LC20lb.MBeuO.DKV0Md");

    await page.waitForSelector(".menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-12851 a", { visible: true });
    await page.click(".menu-item.menu-item-type-custom.menu-item-object-custom.menu-item-12851 a");

    await page.waitForSelector('.hr_button:not([class*=" "])', { visible: true });
    await page.click('.hr_button:not([class*=" "])');

    await page.waitForSelector("input[type = 'text']", { visible: true });
    // user id
    await page.type("input[type = 'text']", "USER ID");
    //PASSWORD
    await page.type("input[type = 'password']", "PASSWORD");

    await sleep(2000);

    await page.waitForSelector('button[type = "button"].c-kquFKz.c-kquFKz-dshqME-variant-primary', { visible: true });
    await page.click('button[type = "button"].c-kquFKz.c-kquFKz-dshqME-variant-primary');
    await sleep(5000);
    await page.waitForSelector(".nav-link.contests", { visible: true });
    await page.click(".nav-link.contests");
    await page.waitForSelector(".contest-view-v2.hr-flex.hr-gap-1 a", { visible: true });
    await page.click(".contest-view-v2.hr-flex.hr-gap-1 a");

    await page.waitForSelector('input[type = "search"]', { visible: true });
    // challenge name 
    await page.type('input[type = "search"]', "CHALLENGE NAME");
    await sleep(2000);
    
    await page.keyboard.press("Enter");
    
    await sleep(5000);

    await page.click("span.c-cRiZRs");
    

    await page.waitForSelector('li[data-tab="challenges"]>a.cursor.change-tab', { visible: true });
    await page.click('li[data-tab="challenges"]>a.cursor.change-tab');
    await sleep(2000);

    await page.waitForSelector('button[type ="button"].btn.btn-primary', { visible: true });
    await page.click('button[type ="button"].btn.btn-primary');

    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });

    
    const questions =[ 
    //Questions
    ]

    for(let i=0 ; i < questions.length ; i++){
    await sleep(2000);
    await page.waitForSelector("button.btn.add-challenge.pull-left.msT.mjB", { visible: true });
    await page.click("button.btn.add-challenge.pull-left.msT.mjB");
    await page.waitForSelector('input[type="text"].add-challenge-input.ui-autocomplete-input', { visible: true });
    await page.type('input[type="text"].add-challenge-input.ui-autocomplete-input', questions[i]);
    await page.type('input[type="text"].add-challenge-score', "10");
    await page.click("button.text-center.btn.add-challenge-button");
    }


  } catch (error) {
    console.error("An error occurred:", error);
  }
})();


function sleep(millisecondsCount) {
    if (!millisecondsCount) {
        return;
    }
    return new Promise(resolve => setTimeout(resolve, millisecondsCount)).catch();
};




