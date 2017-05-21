class PageController {

  constructor($scope, ngRedux) {
    this.$scope = $scope;

    const disconect = ngRedux.connect(this.mapStateToProps, this);
    $scope.$on('destroy', disconect);
    console.log(this);
  }

  init() {
    console.log('app is initialized');
  }

  mapStateToProps(state) {
    return {
      dummy: state.dummy
    };
  }

}

PageController.$inject = ['$scope', 'ngRedux'];
export default PageController;
