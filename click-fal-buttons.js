module.exports = async function(page, context) {
  const buttons = await page.$$("fal-tile-grid button");
  for (let i = 0; i < buttons.length; i++) {
    await buttons[i].click();
    await page.waitForTimeout(3000); // wait 3s for content
    await context.snapshot();        // force save this state
  }
};
