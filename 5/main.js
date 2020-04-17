var app = new Vue({
  el: '#app',
  data: {
    product: "socks",
    image: "./assets/1.jpg",
    inStock: true,
    details: ["80% cotton", "20% polyester", "gender-neutral"],
    variant: [
      {
        variantId: 2234,
        variantcolor: "green"
      },
      {
        variantId:2235,
        variantColor: "blue"
      }
    ]

  }
})
