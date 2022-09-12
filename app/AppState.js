import { Snack } from "./Models/Snack.js";
import { Value } from "./Models/Value.js";
import { EventEmitter } from "./Utils/EventEmitter.js";
import { isValidProp } from "./Utils/isValidProp.js";
import { loadState } from "./Utils/Store.js";

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = loadState("values", Value);
  /** @type {import('./Models/Snack').Snack[]} */

  snacks = [new Snack("Mountain Doo", 2.5, 'https://media.officedepot.com/images/f_auto,q_auto,e_sharpen,h_450/products/122250/122250_p/122250')];
}

export const appState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop);
    return target[prop];
  },
  set(target, prop, value) {
    isValidProp(target, prop);
    target[prop] = value;
    target.emit(prop, value);
    return true;
  },
});
