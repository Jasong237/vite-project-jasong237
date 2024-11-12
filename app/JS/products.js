const products = [
  {
    name: "Smartphone",
    price: 799,
    image: "../public/smartphone.webp",
    category: "Electronics",
  },
  {
    name: "Headphones",
    price: 149,
    image: "../public/headphones.jpg",
    category: "Electronics",
  },
  {
    name: "Smartwatch",
    price: 199,
    image: "../public/smartwatch.png",
    category: "Electronics",
  },
  {
    name: "Laptop",
    price: 1299,
    image: "../public/laptop.jpg",
    category: "Electronics",
  },
  {
    name: "Leather Wallet",
    price: 39.99,
    image: "../public/wallet.webp",
    category: "Accessories",
  },
  {
    name: "Cap",
    price: 89.99,
    image: "../public/cap.jpg",
    category: "Accessories",
  },
  {
    name: "Sunglasses",
    price: 59.99,
    image: "../public/sunglasses.webp",
    category: "Accessories",
  },
  {
    name: "Messenger Bag",
    price: 79.99,
    image: "../public/bag.jpg",
    category: "Accessories",
  },
  {
    name: "Electric Kettle",
    price: 39.99,
    image: "../public/kettle.jpg",
    category: "Kitchen",
  },
  {
    name: "Blender",
    price: 69.99,
    image: "../public/blender.jfif",
    category: "Kitchen",
  },
  {
    name: "Air Fryer",
    price: 129.99,
    image: "../public/fryer.webp",
    category: "Kitchen",
  },
  {
    name: "Coffee Maker",
    price: 49.99,
    image: "../public/coffee.jpg",
    category: "Kitchen",
  },
  {
    name: "T-shirt",
    price: 19.99,
    image: "../public/tshirt.webp",
    category: "Clothing",
  },
  {
    name: "Jeans",
    price: 39.99,
    image: "../public/jeans.jfif",
    category: "Clothing",
  },
  {
    name: "Sneakers",
    price: 79.99,
    image: "../public/sneakers.avif",
    category: "Clothing",
  },
  {
    name: "Hoodie",
    price: 49.99,
    image: "../public/hoodie.webp",
    category: "Clothing",
  },
];

const electronics = products.filter(
  (product) => product.category === "Electronics"
);
const accessories = products.filter(
  (product) => product.category === "Accessories"
);
const clothing = products.filter((product) => product.category === "Clothing");
const kitchen = products.filter((product) => product.category === "Kitchen");

export { products, kitchen, clothing, accessories, electronics };

console.log("Kitchen", kitchen);
