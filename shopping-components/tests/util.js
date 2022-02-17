import {
  renderComponent as glimmerRenderComponent,
  didRender,
} from "@glimmerx/core";

// Bootstrap QUnit
import "qunit";
import "qunit/qunit/qunit.css";
import "qunit-dom/dist/qunit-dom";

QUnit.start();

const getTestRoot = () => document.getElementById("qunit-fixture");

// Setup QUnit.dom
Object.defineProperty(QUnit.assert.dom, "rootElement", { get: getTestRoot });

// re-export QUnit modules for convenience
export const module = QUnit.module;
export const test = QUnit.test;

export async function renderComponent(component, elementOrOptions = {}) {
  let options;

  if (elementOrOptions instanceof HTMLElement) {
    options = { element: elementOrOptions };
  } else {
    const element =
      elementOrOptions.element instanceof HTMLElement
        ? elementOrOptions.element
        : getTestRoot();

    options = { ...elementOrOptions, element };
  }

  await glimmerRenderComponent(component, options);
}

// Re-export didRender for convenience
export { didRender };
