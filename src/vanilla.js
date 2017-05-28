import {addOne} from './actions/dummy-actions';


class Vanilla {

  constructor(store) {
    this.store = store;
    this.addOne = this.addOne.bind(this);
  }

  setProps(props) {
    Object.keys(Vanilla.props).forEach(key => {
      const selector = Vanilla.props[key],
            element = this.element.querySelector(selector);

      element.innerHTML = props[key];
    });
  }

  addOne(event) {
    this.store.dispatch(addOne());
  }

  bindEvents() {
    this.setProps(this.store.getState());
    this.unsubscribe = this.store.subscribe(() => {
      this.setProps(this.store.getState());
    });

    this.element.querySelector('.add-btn').addEventListener('click', this.addOne);
  }

  render(selector) {
    this.element = document.querySelector(selector);
    this.element.innerHTML = Vanilla.template;
    this.bindEvents();
  }

}

Vanilla.props = {
  dummy: '.dummy'
};

Vanilla.template = `
<div class="vanila-container">
  <h1 class="title">Vanila Container</h1>
  <div class="container-header">
    <div class="state-value">
      <span class="dummy"><span>
    </div>
    <button class="btn add-btn" >Add one</button>
  </div>
</div>`;

export default Vanilla;
