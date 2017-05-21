import {addOne} from '../actions/dummy-actions';

class PageController {

  constructor($scope, ngRedux) {
    this.$scope = $scope;

    const disconect = ngRedux.connect(this.mapStateToProps.bind(this), this);
    $scope.$on('destroy', disconect);
  }

  addOne() {
    this.dispatch(addOne());
  }

  mapStateToProps(state) {
    this.$scope.$evalAsync();
    return {
      dummy: state.dummy
    };
  }

}

PageController.$inject = ['$scope', 'ngRedux'];
export default PageController;
