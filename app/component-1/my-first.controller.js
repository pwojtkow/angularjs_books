angular.module('app.component1').controller('MyFirstController', function($scope, $http, $uibModal, bookDataFactory) {
    'use strict';

    $scope.data = {
        books: bookDataFactory.books
    };

    $scope.selectRow = function(index) {
        $scope.selectedRowIndex = index;
    };

    $scope.add = function() {
        $uibModal.open({
            templateUrl: '/component-1/modal-dialog/modal-dialog.tpl.html',
            controller: 'AddModalController',
            size: 'lg'
        });
    };

    $scope.edit = function() {
        $uibModal.open({
            templateUrl: '/component-1/modal-dialog/modal-dialog.tpl.html',
            controller: 'EditModalController',
            size: 'lg',
            resolve: {
                selectedBook: function() {
                    return $scope.data.books[$scope.selectedRowIndex];
                }
            }
        });
    };
});
