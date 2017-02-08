var basket = {
  // name: "Basket",
  items: [],
  price: 0,
  loyalty: false,

  itemCount: function(){
    return this.items.length;
  },

  add: function(newItem){
    this.items.push(newItem);
    // this.price += newItem.cost;
  },

  remove: function(item){
    var index = this.items.indexOf(item);
    this.items.splice(index, 1);
    // this.price -= item.cost;
  },

  empty: function(){
      basket.items = [];
  },

  checkDeal: function(deal){
    deal.discount(this);
  },

  checkTotal: function(){
    var total = 0;
    for(var stuff of this.items){
      total += stuff.cost;
    }
    return total;
  }

};

module.exports = basket;