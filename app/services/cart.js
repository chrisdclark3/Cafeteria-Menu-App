app.factory('Cart', function(localStorageService, $q, $rootScope) {

    var factory = {};

    factory.initialize = function() {
        if (localStorageService.get('cart') === null) {
            factory.cart = {
                count: 0,
                total: 0,
                items: []
            };
        } else {
            factory.cart = localStorageService.get('cart');
        }
        $rootScope.$broadcast('updateCart', factory.cart);
    };

    factory.initialize();

    factory.createItem = function(item) {
        var index = getIndex(item);
        index.then(function (idx) {
          if (idx != undefined) {
              factory.cart.items[idx].qty++;
              factory.cart.items[idx].cost = updateCost(item);
          } else {
              item.qty++;
              item.cost = updateCost(item);
              factory.cart.items.push(item);
          }
          factory.updateCart();
        });
    };

    var updateCost = function(item) {
        return item.price * item.qty;
    };

    factory.updateCart = function() {
        var count = 0,
            total = 0;
        applyToEach(function(i) {
            if (parseInt(factory.cart.items[i].qty, 10) === 0) {
                factory.cart.items.splice(i, 1);
            } else {
                count += parseInt(factory.cart.items[i].qty, 10);
                total += parseFloat(factory.cart.items[i].cost.toFixed(2));
            }
        });
        factory.cart.count = count;
        factory.cart.total = total;
        localStorageService.set('cart', factory.cart);
        $rootScope.$broadcast('updateCart', factory.cart);
    };

    factory.updateItem = function(item) {
        applyToItem(item, function(i, idx) {
            factory.cart.items[idx] = item;
            factory.cart.items[idx].cost = updateCost(item);
            factory.updateCart();
        });
    };

    factory.deleteItem = function(item) {
        applyToItem(item, function(i, idx) {
            factory.cart.count = factory.cart.count - factory.cart.items[idx].qty;
            factory.cart.items.splice(idx, 1);
            factory.updateCart();
        });
    };

    var applyToItem = function(item, callback) {
        for (var i = 0; i < factory.cart.items.length; i++) {
            if (factory.cart.items[i].id == item.id) {
                callback(factory.cart.items[i], i);
            }
        }
        return undefined;
    };

    var getIndex = function(item) {
        return $q(function(resolve, reject) {
            var temp;
            for (var i = 0; i < factory.cart.items.length; i++) {
                if (factory.cart.items[i].id == item.id) {
                    temp = i;
                }
            }
            resolve(temp);
        });
    };

    var applyToEach = function(callback) {
        for (var i = 0; i < factory.cart.items.length; i++) {
            callback(i);
        }
    };

    return factory;
});