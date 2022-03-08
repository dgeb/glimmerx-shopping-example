import Component from '@glimmer/component';

export default class DynamicComponent extends Component {
  get data() {
    return this.args.data ? JSON.stringify(this.args.data) : undefined;
  }
}
