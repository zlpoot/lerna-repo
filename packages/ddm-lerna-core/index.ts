import * as debug from "debug";

export default class Debug {
  print(text: string) {
    debug("log---", text);
  }
}
