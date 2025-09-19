class ClickFalTileGridBehavior {
  // Required: unique id
  static id = "ClickFalTileGrid";

  // Required: decide if this behavior runs on the current page
  static isMatch() {
    // Run only on your emissions report page
    return window.location.href.includes("/observations/report");
  }

  // Optional: skip iframes
  static runInIframes = false;

  // Main logic
  async * run(ctx) {
    const { sleep, getState } = ctx.Lib;

    const buttons = document.querySelectorAll("fal-tile-grid button");
    let index = 0;

    for (const btn of buttons) {
      index++;

      // scroll into view and click (safer than .click())
      ctx.Lib.scrollAndClick(btn);

      // wait for new DOM to render
      await sleep(3000);

      // snapshot current state
      yield ctx.snapshot({ label: `clicked-button-${index}` });

      // log progress
      yield getState(`Clicked button ${index}`, "click");
    }
  }
}
