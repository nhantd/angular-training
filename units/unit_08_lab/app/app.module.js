var myAppDep= angular.module('myAppDep',[])
.controller('MainController', MainController)
// .controller('DetailsController', DetailsController)
.controller('ParamPageController', ParamPageController);

function MainController($scope) {
$scope.title = 'Main Page';
}

function ParamPageController ($routeParams) {
this.$inject = ['$routeParams'];
this.title = 'Param Page Title';
this.pageId = $routeParams.pageId;
}
