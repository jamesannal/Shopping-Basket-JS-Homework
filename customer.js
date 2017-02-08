var customer1 = {
  name: "James",
  loyalty: false,
  basket: [],

  getBasket: function(basket){
    this.baskets.push(basket);
  }
};

var customer2 = {
  name: "Jeff",
  loyalty: true,
  basket: [],

  getBasket: function(basket){
    this.baskets.push(basket);
  }
};

var customers = [customer1, customer2];

module.exports = customers;