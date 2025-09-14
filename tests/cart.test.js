const cart = require('../cart.js');

describe("addItem", function() {

   test("should add milk with a quantity of 1 to the end of the shoppingCart array",
function() {
       expect(cart.addItem(cart.shoppingCart, "milk", 1)).toBe([{name: "eggs", amount: 12}, 
        {name: "bread", amount: 1}, {name: "milk", amount: 1}
       ]);
   });

   test("should add milk with a quantity of -1 to the end of the shoppingCart array",
function() {
       expect(cart.addItem(cart.shoppingCart, "milk", -1)).toBe([{name: "eggs", amount: 12}, 
        {name: "bread", amount: 1}, {name: "milk", amount: -1}
       ]);
   });

   test("should add milk with a quantity of 0 to the end of the shoppingCart array",
function() {
       expect(cart.addItem(cart.shoppingCart, "milk", 0)).toBe([{name: "eggs", amount: 12}, 
        {name: "bread", amount: 1}, {name: "milk", amount: 0}
       ]);
   });
});

describe("removeItem", function() {
   test("should remove eggs from the shoppingCart array", function() {
       expect(cart.removeItem(cart.shoppingCart, "eggs")).toBe([{name: "eggs", amount: 12}, 
        {name: "bread", amount: 1}, {name: "milk", amount: 1}
       ]);
   });

   test("should remove nothing when an item not in the cart is specified", function() {
       expect(cart.removeItem(cart.shoppingCart, "shampoo")).toBe([{name: "eggs", amount: 12}, 
        {name: "bread", amount: 1}, {name: "milk", amount: 1}
       ]);
  });

   test("should remove the last item, milk, from the array", function() {
       expect(cart.removeItem(cart.shoppingCart, "milk")).toBe([{name: "eggs", amount: 12}, 
        {name: "bread", amount: 1}
       ]);
   });
});

describe("getTotalItems", function() {
   test("should return the total number of items in the shoppingCart array", function() {
       expect(cart.getTotalItems(cart.shoppingCart)).toBe(2);
   });

   test("should return 0 items for an empty array", function() {
       expect(cart.getTotalItems(cart.emptyCart)).toBe(0);
  });

   test("should return the total number of items for a large array", function() {
       expect(cart.getTotalItems(cart.millionCart)).toBe(1000000);
   });
});