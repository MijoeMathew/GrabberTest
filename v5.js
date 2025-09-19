class ClickFalTileGridBehavior {
  static id = "ClickFalTileGrid";

  static isMatch() {
    // Only run if fal-tile-grid is present
    return document.querySelector("fal-tile-grid button") !== null;
  }

  static async init(ctx) {
    ctx.log("ClickFalTileGridBehavior initialized");
  }

  async * run(ctx) {
    const { sleep, scrollAndClick } = ctx.Lib;

    const buttons = document.querySelectorAll("fal-tile-grid button");
    let index = 0;

    for (const btn of buttons) {
      index++;

      scrollAndClick(btn);

      // wait for page update (option A: fixed pause)
      yield sleep(3000);

      // option B: smarter wait for a unique selector
      // yield ctx.waitForSelector(".emissions-page");

      yield ctx.capture({ label: `clicked-button-${index}` });
      yield ctx.log(`Clicked button ${index}`);
    }
  }
}
