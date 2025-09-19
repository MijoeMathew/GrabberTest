class ClickFalTileGridBehavior { 
  // required: an id property
  static id = "ClickFalTileGridBehavior";

  // required: isMatch() to decide when this behavior should run
  // you can customize this to match your page URL or other criteria
  static isMatch() {
    // match your target page(s). Example:
    return window.location.href.startsWith("https://app.falcony.io/microcare-technologi/observations/report");
  }

  // optional: whether to run in iframes
  static runInIframes = false;

  // required: main logic as async iterator
  async * run(ctx) {
    // find the buttons
    const buttons = document.querySelectorAll("fal-tile-grid button");
    let index = 0;

    for (const btn of buttons) {
      index++;
      btn.click();
      // wait for some delay to allow DOM updates
      await new Promise(res => setTimeout(res, 3000));
      // snapshot to save that state (include label if you like)
      yield ctx.snapshot({ label: `clicked-button-${index}` });
    }
  }
}

// ensure the file exposes the class (top-level)
