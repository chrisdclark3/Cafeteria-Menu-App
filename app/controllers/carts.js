app.controller('CartsCtrl', function(Cart, Menu, Order, $scope, localStorageService) {

    $scope.$on('updateCart', function(event, cart) {
        $scope.cart = cart;
    });

    if (typeof $scope.cart === 'undefined') {
        Cart.initialize();
    }

    $scope.currentUser = "Arun";

    $scope.updateItem = function(item) {
        Cart.updateItem(item);
    };

    $scope.updateCart = function() {
        Cart.updateCart();
    };

    $scope.deleteItem = function(item) {
        console.log("deleting item...");
        Cart.deleteItem(item);
    };

    $scope.isDisabled = false;
    $scope.$watch('cart.count', function() {
        $scope.isDisabled = $scope.cart.count != 0 ? false : true;
    });

    $scope.createOrder = function() {
        Order.createOrder($scope.cart, $scope.selectedDateTime, $scope.currentUser);
        removeCart();
    };

    var removeCart = function () {
        localStorageService.remove('cart');
        Cart.initialize();
        $scope.updateCart();
        $scope.displayMessage();
        $scope.isDisabled = true;
    };

    $scope.orderCreated = false;
    $scope.displayMessage = function() {
        $scope.orderCreated = true;
        $scope.message = "Thank you " + $scope.currentUser + "! Your order has been submitted. Your food will be available on " + Order.formatDate($scope.selectedDateTime) + ".";
    };

    $scope.calendarOpened = false;
    $scope.calendarOpen = function() {
        $scope.calendarOpened = $scope.calendarOpened == false ? true : false;
        event.stopPropagation();
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        showWeeks: false
    };

    $scope.hstep = 1;
    $scope.mstep = 15;
    $scope.isMeridian = true;
    $scope.selectedTime = $scope.selectedTime == undefined ? new Date() : $scope.selectedTime;
    $scope.selectedDate = $scope.selectedDate == undefined ? new Date() : $scope.selectedDate;

    $scope.setTime = function() {
        var minutes = $scope.selectedTime.getMinutes();
        var roundingNum = minutes % 15;
        $scope.selectedTime.setMinutes(minutes - roundingNum);
        $scope.changeTime();
    };

    $scope.changeTime = function() {
        var d = $scope.selectedDate;
        var t = $scope.selectedTime;
        $scope.selectedDateTime = new Date(d.getFullYear(), d.getMonth(), d.getDay(), t.getHours(), t.getMinutes());
        console.log("Selected Time", $scope.selectedDateTime);
    };

});