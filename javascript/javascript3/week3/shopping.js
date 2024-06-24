class ShoppingCart {
  constructor() {
    this.items = [];
    this.totalAmount = 0;
  }

  addItem(product) {
    this.items.push(product);
    this.getTotalCart();
  }
  removeItem(productName) {
    const index = this.items.findIndex((item) => item.name === productName);
    if (index !== -1) {
      this.items.splice(index, 1);
      this.getTotalCart();
    } else {
      console.log("This product is not in your cart");
    }
  }
  getTotalCart() {
    this.totalAmount = this.items.reduce(
      (accumulator, item) => accumulator + item.price * item.quantity,
      0
    );
  }
  updateTotalCart(product) {
    this.totalAmount -= product.quatity * product.price;
  }
}

const myShoppingCart = new ShoppingCart();
myShoppingCart.addItem({
  name: "milk",
  price: 100,
  quantity: 5,
});

console.log(myShoppingCart);
