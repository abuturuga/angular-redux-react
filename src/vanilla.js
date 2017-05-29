import {addOne, removeOne} from './actions/dummy-actions';
import {
  fetchOne,
  startFetch,
  endFetch,
  errorFetch} from './actions/fetch-actions';
import externalService from './external-service';


class Vanilla {

  constructor(store) {
    this.store = store;
    this.addOne = this.addOne.bind(this);
    this.removeOne = this.removeOne.bind(this);
    this.fetchOne = this.fetchOne.bind(this);
    this.fetchFromService = this.fetchFromService.bind(this);
  }

  setProps(props) {
    Object.keys(Vanilla.props).forEach(key => {
      const selector = Vanilla.props[key],
            element = this.element.querySelector(selector);
      let value = props[key];

      if(key === 'fetch') {
        value = JSON.stringify(value, null, ' ');
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

  fetchFromService(event) {
    this.store.dispatch(startFetch());
    externalService()
      .then(data => {
        this.store.dispatch(endFetch(data));
      })
      .catch(error => {
        this.store.dispatch(errorFetch(error));
      });
  }

  bindEvents() {
    this.setProps(this.store.getState());
    this.unsubscribe = this.store.subscribe(() => {
      this.setProps(this.store.getState());
    });

    this.element.querySelector('.add-btn').addEventListener('click', this.addOne);
    this.element.querySelector('.remove-btn').addEventListener('click', this.removeOne);
    this.element.querySelector('.fetch-btn').addEventListener('click', this.fetchOne);
    this.element.querySelector('.fetch-service').addEventListener('click', this.fetchFromService);
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
    <div class="state-values">
      <div class="state-value">
        <span class="label">dummy</span>
        <span class="dummy"></span>
      </div>
      <div class="state-value">
        <span class="label">fetch</span>
        <pre class="fetch"></pre>
      </div>
    </div>
    <button class="btn add-btn" >Add one</button>
    <button class="btn remove-btn">Remove one</button>
    <button class="btn fetch-btn">Fetch one</button>
    <button class="btn fetch-service">Fetch from service</button>
  </div>
</div>`;

export default Vanilla;
