app.factory('Menu', function(localStorageService) {

    var factory = {};

    factory.restaurants = [

        {
            alias: 'hoagie-haven',
            id: 0,
            name: 'Hoagie Haven',
            description: 'My favorite sandwhich shop where I grew up (Princeton NJ)',
            items: [{
                id: 0,
                name: 'Fat Lady',
                price: "8.99",
                qty: "0",
                description: 'A cheese steak with mozzarella sticks, french fries'
            }, {
                id: 1,
                name: 'Body Bag',
                price: "10.99",
                qty: "0",
                description: 'A cheese steak, with hash browns, eggs, ketchup or hot sauce'
            }, {
                id: 2,
                name: 'El Sanchez',
                price: "7.99",
                qty: "0",
                description: 'A chicken cutlet hoagie with American cheese, mozzarella sticks, french fries and special sauce'
            }, {
                id: 3,
                name: 'Big Cat',
                price: "15.99",
                qty: "0",
                description: 'A hoagie with four bacon cheese burgers and four eggs'
            }]
        },

        {
            alias: 'bones',
            id: 1,
            name: 'Bones',
            description: 'Best restaurant I went to at school (Atlanta, GA)',
            items: [{
                id: 4,
                name: 'New York Strip',
                price: "32.80",
                qty: "0",
                description: '12 or 16 ounces'
            }, {
                id: 5,
                name: 'Bone in Rib Eye',
                price: "40.26",
                qty: "0",
                description: 'Dry aged, 20 ounces. Available for two in 34 ounce size'
            }, {
                id: 6,
                name: 'Porter House',
                price: "26.00",
                qty: "0",
                description: '24 ounces'
            }, {
                id: 7,
                name: 'Truffle Butter Mashed Potatoes',
                price: "10.64",
                qty: "0",
                description: 'Absurdly rich; absurdly tasty'
            }]
        },

        {
            alias: 'tipsy-parson',
            id: 2,
            name: 'Tipsy Parson',
            description: 'My favorite local spot when I was living in Chelsea (New York, NY)',
            items: [{
                id: 8,
                name: 'BBQ Pulled Pork',
                price: "11.11",
                qty: "0",
                description: 'Berkshire pork butt, housemade slaw, potato bun with fried egg'
            }, {
                id: 9,
                name: 'Homemade Mac n Cheese',
                price: "5.63",
                qty: "0",
                description: 'Add bacon (2) or jalapeno (1)'
            }, {
                id: 10,
                name: 'Bloody Butcher Stone Ground Grits',
                price: "12.45",
                qty: "0",
                description: 'topped with: cheddar, bacon and mushrooms'
            }, {
                id: 11,
                name: 'The Farmstand',
                price: "18.17",
                qty: "0",
                description: 'Two poached eggs, pesto, seasonal veggies, bitter greens, almonds and breadcrumbs'
            }]
        },

        {
            alias: 'blue-barn',
            id: 3,
            name: 'Blue Barn',
            description: 'My favorite spot since moving to San Francisco',
            items: [{
                id: 12,
                name: 'Buffalo Blue',
                price: "12.06",
                qty: "0",
                description: 'spicy buffalo sauce’d grilled chicken, blue cheese dressing, celery greens, red onion and romaine on a ciabatta roll '
            }, {
                id: 13,
                name: 'Big Tuna',
                price: "13.04",
                qty: "0",
                description: 'pole-caught albacore tuna salad, roma tomato, red onion & watercress on herbed focaccia'
            }, {
                id: 14,
                name: 'Truffle',
                price: "17.83",
                qty: "0",
                description: 'peppered turkey breast, brie d’ onois, balsamic onion, roma tomato, mixed greens and truffle garlic aioli on herbed focaccia'
            }, {
                id: 15,
                name: 'Barn Blt',
                price: "12.34",
                qty: "0",
                description: 'Two poached eggs, pesto, seasonal veggies, bitter greens, almonds and breadcrumbs'
            }]
        }

    ];

    return factory;

});