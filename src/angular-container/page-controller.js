class PageController {

  constructor($scope) {
    this.$scope = $scope;
    this.state = {
      field: 1
    };
  }

  init() {
    console.log('app is initialized');
  }

}

PageController.$inject = ['$scope'];
export default PageController;
