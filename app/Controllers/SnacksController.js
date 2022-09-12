import { appState } from "../AppState.js";
import { snacksService } from "../Services/SnacksService.js";
let totalCash=0
function drawSnacks() {
  let snacks = appState.snacks;
  let template = "";
  snacks.forEach((s) => (template += s.Template));
  document.getElementById("snacks").innerHTML = template;
}


function addCash(){
  totalCash++; 
  drawCash()
}

export class SnacksController {
  constructor() {
    console.log("whats up");
    drawSnacks();
  }
  buySnack() {
    console.log("bought2-electric bugaloo");
    snacksService.buySnack();
  }


}
