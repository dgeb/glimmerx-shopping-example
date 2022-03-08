import { module, test, renderComponent } from '../util';
import { hbs } from '@glimmerx/component';

import Bag from '../../src/components/Bag';
import { bag } from '../../src/services/bag';

module('Bag test', (hooks) => {
  test('it renders a title', async (assert) => {
    await renderComponent(hbs`<Bag />`, { services: { bag }});
    assert.dom('h2').containsText('Bag');
  });
});
