export class Snack {
  constructor(name, price, img) {
    this.name = name;
    this.price = price;
    this.img = img
  }

  get Template() {
    return ` 
    <div class="bg-dark text-light text-center col-md-4">
              <h3>${this.name}</h3>
              <img
                src="${this.img}"
                alt=""/>
              <h3>${this.price}</h3>
              <button
                class="btn btn-primary mb-2"
                onclick="app.snacksController.buySnack('${this.name}')"
              >
                BUY
              </button>
            </div>
    `;
  }
}
