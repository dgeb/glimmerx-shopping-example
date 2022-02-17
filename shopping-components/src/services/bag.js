import { tracked } from "@glimmerx/component";
import { action } from "@glimmerx/modifier";

export class Bag {
  @tracked items = 0;

  @action addItem() {
    this.items += 1;
  }

  @action removeItem() {
    if (this.items > 0) this.items -= 1;
  }
}

export const bag = new Bag();
