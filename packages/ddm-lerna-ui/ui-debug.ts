import Debug from "ddm-lerna-core/index";

export class UiDebug {
  debug = new Debug();

  printDebug() {
    this.debug.print("aaaa");
  }
}
