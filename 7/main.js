
var app = new Vue({
  el: '#app',
  data: {
    product: "socks",
    image: "./assets/.png",
    inStock: true,
    details: ["80% cotton", "20% polyester", "gender-neutral"],
    variants: [
      {
      variantId: 2234,
      variantColor: "green",
      variantImage: "./assets/"
      },
    {
      variantId: 2235,
      variantColor: "blue",
      variantImage: "/.assets/"
    }
  ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateProduct(variantImage) {
        this.image = variantImage
    }
  }
})
