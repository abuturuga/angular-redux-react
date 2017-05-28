class Controller {

  constructor($scope) {
    this.$scope = $scope;
    console.log('Angular Container');
  }

}

Controller.$inject = ['$scope'];
export default Controller;
