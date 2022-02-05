import Component, { hbs } from '@glimmerx/component';
import Bag from './components/Bag';

import './App.css';

export default class App extends Component {
  static template = hbs`
    <div class="max-w-screen-lg mx-auto px-6 flex flex-col min-h-screen bg-white">
      <h1 class="text-3xl font-bold py-4 text-center">Glimmer Shopping</h1>
      <Bag />
    </div>
  `;
}
