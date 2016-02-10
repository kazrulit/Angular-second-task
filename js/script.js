/**
 * Created by Khamid_Sarmanov on 2/10/2016.
 */
angular.module('myApp', []).controller('usersController', ['$scope', function($scope){

    $scope.users = [
        {firstName: 'John', lastName: 'Doe', attendStatus: 'Will be there'},
    ]

    /**
     * Add users if form is valid
     * @param firstName
     * @param lastName
     * @param email
     * @param status
     */
    $scope.addUser = function(firstName, lastName, email, status) {
        if($scope.form.$valid) {
            $scope.users.push({firstName: firstName, lastName: lastName, attendStatus: status});
            console.log($scope.users);
        }
    }
}]);