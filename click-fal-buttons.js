async function behavior(page, context) {
  console.log("Custom behavior started");

  const buttons = await page.$$("fal-tile-grid button");
  console.log(`Found ${buttons.length} buttons`);

  for (let i = 0; i < buttons.length; i++) {
    console.log(`Clicking button ${i + 1}`);
    await buttons[i].click();

    // wait for new DOM to render (adjust as needed)
    await page.waitForTimeout(3000);

    // force Browsertrix to save the page state
    await context.snapshot({ label: `button-${i + 1}` });
  }

  console.log("Custom behavior finished");
}
