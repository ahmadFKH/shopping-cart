var ShoppingCart = function () {
 
  // an array with all of our cart items
  var cart = [];

  var updateCart = function () {
    // TODO: Write this function. In this function we render the page.
    // Meaning we make sure that all our cart items are displayed in the browser.
    // Remember to empty the "cart div" before you re-add all the item elements.
    $('.cart-list').empty();
    var total = 0;
    for (var i=0; i<cart.length; i++) {
      var source = $('#item-template').html();
      var template = Handlebars.compile(source);
      var newHTML = template(cart[i]);
      $('.cart-list').append(newHTML);
      total += Number(cart[i].itemPrice);
      $('.total').html(total);
    }
    $('.total').html(total);
  }


  var addItem = function (item) {
    // TODO: Write this function. Remember this function has nothing to do with display. 
    // It simply is for adding an item to the cart array, no HTML involved - honest ;-)
    var newItem = {};
    newItem.itemName = item.data().name;
    newItem.itemPrice = item.data().price;
    cart.push(newItem);

  }

  var clearCart = function () {
    // TODO: Write a function that clears the cart ;-)
    cart = [];
    updateCart();
  }
  
  return {
    updateCart: updateCart,
    addItem: addItem,
    clearCart: clearCart
  }
};

var app = ShoppingCart();

// update the cart as soon as the page loads!
app.updateCart();


//--------EVENTS---------

$('.view-cart').on('click', function () {
  // TODO: hide/show the shopping cart!
  $('.shopping-cart').toggle(500);
});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var item = $(this).closest('div.card');
  app.addItem(item);
  app.updateCart();
});

$('.clear-cart').on('click', function () {
  app.clearCart();
});