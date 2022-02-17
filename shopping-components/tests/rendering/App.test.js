import { module, test, renderComponent } from '../util';
import { hbs } from '@glimmerx/component';

import App from '../../src/App';
import { bag } from '../../src/services/bag';

module('App test', (hooks) => {
  test('it works', async (assert) => {
    await renderComponent(hbs`<App />`, { services: { bag }});
    assert.dom('h1').containsText('Glimmer Shopping');
  });
});
