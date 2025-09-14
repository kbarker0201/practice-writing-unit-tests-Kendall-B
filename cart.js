let shoppingCart = [
    {
        name: "eggs",
        amount: 12
    },
    {
        name: "bread",
        amount: 1
    }
];

let emptyCart = [];

function addItem(cart, item, quantity) {
    let newItem = {name: item, amount: quantity};
    return cart.push(newItem);
}

function removeItem(cart, item) {
    let itemIndex = cart.indexOf(item);
    return cart.splice(itemIndex, 1);
}

function getTotalItems(cart) {
    return cart.length;
}

module.exports = {addItem, removeItem, getTotalItems, shoppingCart, emptyCart};