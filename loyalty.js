loyalty = {
  discount: function(basket){
    if(basket.price === 0){
      var subtotal = basket.checkTotal();
    } else {
      var subtotal = basket.price;
    }

    if(basket.loyalty){
      basket.price = (subtotal * 0.95).toFixed(2);
    } else {
      basket.price = subtotal;
    }
  }
}

module.exports = loyalty;