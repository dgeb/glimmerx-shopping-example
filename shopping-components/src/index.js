import { renderComponent } from '@glimmerx/core';
import { hbs } from '@glimmerx/component';
import App from './App';
import { bag } from './services/bag';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const element = document.getElementById('app');
    renderComponent(
      hbs`
        <App />
      `,
      {
        element,
        services: {
          bag
        }
      }
    );
  },
  { once: true }
);
