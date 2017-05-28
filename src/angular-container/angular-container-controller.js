import {addOne, removeOne} from '../actions/dummy-actions';
import {fetchOne} from '../actions/fetch-actions';


class Controller {

  constructor($scope, ngRedux) {
    this.$scope = $scope;
    this.ngRedux = ngRedux;
  }

  $onInit() {
    const disconect = this.ngRedux.connect(this.mapStateToProps.bind(this), this);
    this.$scope.$on('destroy', disconect);
  }

  addOne() {
    this.dispatch(addOne());
  }

  removeOne() {
    this.dispatch(removeOne());
  }

  fetchOne() {
    this.dispatch(fetchOne());
  }

  mapStateToProps(state) {
    return {
      dummy: state.dummy,
      fetch: state.fetch
    };
  }

}

Controller.$inject = ['$scope', 'ngRedux'];
export default Controller;
