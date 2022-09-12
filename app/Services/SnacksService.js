import { appState } from "../AppState.js";

class SnacksService {
  buySnack(name) {
    console.log("snack bought");
    let snack = appState.snacks.find((s) => s.name == name);
    if (totalCash >= snack.price){
      totalCash -= snack.price
    }
    console.log(snack);
  }
   
}
export const snacksService = new SnacksService();

