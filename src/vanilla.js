import {addOne, removeOne} from './actions/dummy-actions';
import {fetchOne} from './actions/fetch-actions';


class Vanilla {

  constructor(store) {
    this.store = store;
    this.addOne = this.addOne.bind(this);
    this.removeOne = this.removeOne.bind(this);
    this.fetchOne = this.fetchOne.bind(this);
  }

  setProps(props) {
    Object.keys(Vanilla.props).forEach(key => {
      const selector = Vanilla.props[key],
            element = this.element.querySelector(selector);
      let value = props[key];

      if(key === 'fetch') {
        value = JSON.stringify(value, value);
      }
      element.innerHTML = value;
    });
  }

  destroy() {
    this.unsubscribe();
  }

  addOne(event) {
    this.store.dispatch(addOne());
  }

  removeOne(event) {
    this.store.dispatch(removeOne());
  }

  fetchOne(event) {
    this.store.dispatch(fetchOne());
  }

  bindEvents() {
    this.setProps(this.store.getState());
    this.unsubscribe = this.store.subscribe(() => {
      this.setProps(this.store.getState());
    });

    this.element.querySelector('.add-btn').addEventListener('click', this.addOne);
    this.element.querySelector('.remove-btn').addEventListener('click', this.removeOne);
    this.element.querySelector('.fetch-btn').addEventListener('click', this.fetchOne);
  }

  render(selector) {
    this.element = document.createElement('div');
    this.element.innerHTML = Vanilla.template;
    this.bindEvents();
    return this.element;
  }

}

Vanilla.props = {
  dummy: '.dummy',
  fetch: '.fetch'
};

Vanilla.template = `
<div class="vanila-container">
  <h1 class="title">Vanila Container</h1>
  <div class="container-header">
    <div class="state-value">
      <span class="dummy"></span>
      <pre class="fetch"></pre>
    </div>
    <button class="btn add-btn" >Add one</button>
    <button class="btn remove-btn">Remove one</button>
    <button class="btn fetch-btn">Fetch one</button>
  </div>
</div>`;

export default Vanilla;
