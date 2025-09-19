class ClickFalTileGridBehavior {
  static id = "ClickFalTileGrid";

  static isMatch() {
    return window.location.href.includes("/observations/report");
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

      // wait for new content
      yield ctx.wait(3000);

      // take a snapshot
      yield ctx.capture({ label: `clicked-button-${index}` });

      // log progress
      yield ctx.log(`Clicked button ${index}`);
    }
  }
}
