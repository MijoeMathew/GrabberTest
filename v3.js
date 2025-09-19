class ClickFalTileGridBehavior {
  // Unique identifier for the behavior
  static id = "ClickFalTileGrid";

  // Decide if this behavior applies to the current page
  static isMatch() {
    // Run only on observation report pages
    return window.location.href.includes("/observations/report");
  }

  // One-time setup (before run starts)
  static async init(ctx) {
    ctx.log("ClickFalTileGridBehavior initialized");
  }

  // The main async generator
  async * run(ctx) {
    const { sleep, getState, scrollAndClick } = ctx.Lib;

    const buttons = document.querySelectorAll("fal-tile-grid button");
    let index = 0;

    for (const btn of buttons) {
      index++;

      // scroll into view and click safely
      scrollAndClick(btn);

      // wait for page content to update
      await sleep(3000);

      // take a snapshot after clicking
      yield ctx.snapshot({ label: `clicked-button-${index}` });

      // log step in crawl state
      yield getState(`Clicked button ${index}`, "click");
    }
  }
}
