app.controller('MenusCtrl', function(Cart, Menu, $timeout, $scope, localStorageService) {

    $scope.restaurants = Menu.restaurants;

    $scope.$on('updateCart', function(event, cart) {
        $scope.cart = cart;
    });

    if (typeof $scope.cart === 'undefined') {
        Cart.initialize();
    }

    $scope.selectedMenu = -1;
    $scope.toggleMenu = function($index) {
        $scope.selectedMenu = $index;
        event.stopPropagation();
    };

    $scope.closeMenu = function() {
        $scope.selectedMenu = -1;
        event.stopPropagation();
    };

    $scope.itemCreated = false;
    $scope.messages = [];

    var setItemCreated = function(msg) {
        for (var i = 0; i < $scope.messages.length; i++) {
            if ($scope.messages[i].id == msg.id) {
                $scope.messages.splice(i, 1);
            }
        }
        if ($scope.messages.length === 0) {
            $scope.itemCreated = false;
        }
    };

    var setMessage = function(name) {
        var msg = {
            id: $scope.messages.length + 1,
            content: "One " + name + " successfully added to cart!"
        };
        $scope.messages.push(msg);
        $timeout(function() {
            setItemCreated(msg);
        }, 2000);
    };

    $scope.createItem = function(item, menu) {
        item.restaurant_id = menu.id;
        item.restaurant_name = menu.name;
        Cart.createItem(item);
        $scope.itemCreated = true;
        setMessage(item.name);
    };

});