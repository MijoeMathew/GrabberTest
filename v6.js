class MatListClicker {
  static id = "MatListClicker";

  static isMatch() {
    // Run on any page with Angular Material list buttons
    return document.querySelector("button[mat-list-item]") !== null;
  }

  static async init(ctx) {
    ctx.log("MatListClicker initialized");
  }

  async * run(ctx) {
    const { sleep, scrollAndClick } = ctx.Lib;

    const buttons = document.querySelectorAll("button[mat-list-item]");
    let index = 0;

    for (const btn of buttons) {
      index++;

      ctx.log(`Clicking list button ${index}: ${btn.innerText}`);
      scrollAndClick(btn);

      // Either wait for URL to change...
      // yield ctx.waitForNavigation();

      // ...or wait for a new selector that appears after click
      yield sleep(3000);

      yield ctx.capture({ label: `mat-list-button-${index}` });
    }
  }
}
