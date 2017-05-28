import {addOne} from '../actions/dummy-actions';


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

  mapStateToProps(state) {
    return {
      dummy: state.dummy
    };
  }

}

Controller.$inject = ['$scope', 'ngRedux'];
export default Controller;
