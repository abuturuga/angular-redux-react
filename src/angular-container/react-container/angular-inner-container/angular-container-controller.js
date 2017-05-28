class Controller {

  constructor($scope) {
    this.$scope = $scope;
    console.log('Angular Continaer');
  }

}

Controller.$inject = ['$scope'];
export default Controller;
