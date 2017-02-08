var percentageDiscount = {
  discount: function(basket){
    if (basket.price < 20 ){
      var subtotal = basket.checkTotal();
    } else {
      var subtotal = basket.price;
    }
    if(subtotal >= 20){
      basket.price = (subtotal * 0.9).toFixed(2);
    } else{
      basket.price = subtotal;
    }
  }

}

module.exports = percentageDiscount;