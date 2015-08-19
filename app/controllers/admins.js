app.controller('AdminCtrl', function(Order, $scope, localStorageService) {

    if ($scope.orders === undefined) {
        Order.initialize();
    }

    $scope.oneAtATime = true;

    $scope.deleteOrder = function(index) {
        Order.deleteOrder(index);
        event.stopPropagation();
    };

    $scope.setStatus = function(index, status) {
        Order.setStatus(index, status);
        $scope.openAccordion = false;
        event.stopPropagation();
    };

    $scope.$on('updateOrders', function(event, orders) {
        $scope.orders = orders;
    });

});