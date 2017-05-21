export default function() {
  let _store = null;

  this.setStore = (store) => {
    _store = store;
  };

  const bindProps = (store, mapStateToProps, component) => {
    const props = mapStateToProps(_store.getState());
    if(!props) return;

    Object.keys(props).forEach(key => {
      component[key] = props[key];
    });
  };

  this.$get = () => {
    return {
      connect: (mapStateToProps, component) => {
        component.dispatch = _store.dispatch;
        bindProps(_store, mapStateToProps, component);
        return _store.subscribe(() => {
          bindProps(_store, mapStateToProps, component);
        });
      }
    };
  };
}
