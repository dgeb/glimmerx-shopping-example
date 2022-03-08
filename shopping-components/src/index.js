import { renderComponent } from "@glimmerx/core";
import { hbs } from "@glimmerx/component";
import Bag from "./components/Bag";
import BuyButton from "./components/BuyButton";
import { bag } from "./services/bag";

const services = {
  bag
};

function componentTemplate(name, data) {
  switch (name) {
    case "Bag":
      return hbs`<Bag />`;

    case "BuyButton":
      return hbs`<BuyButton @text={{data.text}} @product={{data.product}} />`;
  }
}

document.addEventListener(
  "DOMContentLoaded",
  () => {
    const elements = document.querySelectorAll("[data-dynamic-component]");
    elements.forEach((element) => {
      const name = element.getAttribute("data-dynamic-component");
      const dataString = element.getAttribute("data-dynamic-component-data");
      const data = dataString ? JSON.parse(dataString) : undefined;

      console.log('rendering dynamic component:', name, 'data:', data);

      const template = componentTemplate(name, data);
      if (template) {
        renderComponent(template, { element, services });
      } else {
        console.warn(`Warning! Unrecognized dynamic element '${name}'`);
      }
    });
  },
  { once: true }
);
