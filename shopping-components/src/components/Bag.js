import Component, { hbs } from '@glimmerx/component';
import { service } from '@glimmerx/service';
import { on } from '@glimmerx/modifier';
import { eq } from '../helpers';

export default class Bag extends Component {
  @service bag;

  static template = hbs`
    <div>
      <h2>Bag</h2>
      <p>
        {{#if (eq this.bag.items 0)}}
          Your bag is empty!
        {{else}}
          Items: {{this.bag.items}}
        {{/if}}
      </p>
      <section>
        <button {{on "click" this.bag.addItem}}>[ + ]</button>
        <button {{on "click" this.bag.removeItem}}>[ - ]</button>
      </section>
    </div>
  `;
}
