app.factory('Order', function(localStorageService, $rootScope) {

    factory = {};

    factory.initialize = function () {
      if (localStorageService.get('orders') == null) {
        factory.orders = [];
      } else {
          factory.orders = localStorageService.get('orders');
      }
      $rootScope.$broadcast('updateOrders', factory.orders);
    };

    factory.initialize();


    factory.formatDate = function (d) {
        var dateString = d.toDateString() + " at " + d.toLocaleTimeString();
        return dateString;
    };

    factory.createOrder = function(cart, time, user) {
        var order = {
            id: factory.orders.length++,
            cart: cart,
            user: user,
            status: 'Status',
            createdAt: factory.formatDate(time)
        };
        factory.orders.push(order);
        factory.updateOrders();
    };

    factory.setStatus = function(index, status) {
        factory.orders[index].status = status;
        factory.updateOrders();
    };

    factory.updateOrders = function() {
        localStorageService.set('orders', factory.orders);
        $rootScope.$broadcast('updateOrders', factory.orders);
    };

    factory.deleteOrder = function(index) {
        factory.orders.splice(index, 1);
        factory.updateOrders();
    };

    return factory;
});