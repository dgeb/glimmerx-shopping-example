import Component, { hbs } from '@glimmerx/component';
import { service } from '@glimmerx/service';
import { on } from '@glimmerx/modifier';

export default class BuyButton extends Component {
  @service bag;

  static template = hbs`
    <button {{on "click" this.bag.addItem}}>
      {{this.args.text}}
    </button>
  `;
}
