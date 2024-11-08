const products = [
  {
    name: "Smartphone",
    price: 799,
    image: "https://via.placeholder.com/150",
    category: "Electronics",
  },
  {
    name: "Bluetooth Headphones",
    price: 149,
    image: "https://via.placeholder.com/150",
    category: "Electronics",
  },
  {
    name: "Smartwatch",
    price: 199,
    image: "https://via.placeholder.com/150",
    category: "Electronics",
  },
  {
    name: "Laptop",
    price: 1299,
    image: "https://via.placeholder.com/150",
    category: "Electronics",
  },
  {
    name: "Leather Wallet",
    price: 39.99,
    image: "https://via.placeholder.com/150",
    category: "Accessories",
  },
  {
    name: "Wristwatch",
    price: 89.99,
    image: "https://via.placeholder.com/150",
    category: "Accessories",
  },
  {
    name: "Sunglasses",
    price: 59.99,
    image: "https://via.placeholder.com/150",
    category: "Accessories",
  },
  {
    name: "Messenger Bag",
    price: 79.99,
    image: "https://via.placeholder.com/150",
    category: "Accessories",
  },
  {
    name: "Electric Kettle",
    price: 39.99,
    image: "https://via.placeholder.com/150",
    category: "Kitchen",
  },
  {
    name: "Blender",
    price: 69.99,
    image: "https://via.placeholder.com/150",
    category: "Kitchen",
  },
  {
    name: "Air Fryer",
    price: 129.99,
    image: "https://via.placeholder.com/150",
    category: "Kitchen",
  },
  {
    name: "Coffee Maker",
    price: 49.99,
    image: "https://via.placeholder.com/150",
    category: "Kitchen",
  },
  {
    name: "T-shirt",
    price: 19.99,
    image: "https://via.placeholder.com/150",
    category: "Clothing",
  },
  {
    name: "Jeans",
    price: 39.99,
    image: "https://via.placeholder.com/150",
    category: "Clothing",
  },
  {
    name: "Sneakers",
    price: 79.99,
    image: "https://via.placeholder.com/150",
    category: "Clothing",
  },
  {
    name: "Hoodie",
    price: 49.99,
    image: "https://via.placeholder.com/150",
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
