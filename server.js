const express = require("express");
const app = express();

app.use(express.json());

// ===============================
// In-memory Data (Mock Database)
// ===============================
let products = [
  { id: 101, name: "Laptop", category: "electronics", price: 500 },
  { id: 102, name: "Phone", category: "electronics", price: 300 },
  { id: 103, name: "Shoes", category: "fashion", price: 80 }
];

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

let orders = [
  { id: 5001, userId: 1, products: [{ productId: 101, quantity: 1 }] }
];

let reviews = [
  { id: 1, productId: 101, comment: "Great!" },
  { id: 2, productId: 101, comment: "Worth it!" }
];

// ===============================
// STEP 2: GET Operations
// ===============================

// GET /v1/products (with filtering, sorting, pagination)
app.get("/v1/products", (req, res) => {
  let result = [...products];

  const { category, sort, limit } = req.query;

  // Filtering
  if (category) {
    result = result.filter(p => p.category === category);
  }

  // Sorting
  if (sort === "price_asc") {
    result.sort((a, b) => a.price - b.price);
  } else if (sort === "price_desc") {
    result.sort((a, b) => b.price - a.price);
  }

  // Pagination (limit)
  if (limit) {
    result = result.slice(0, parseInt(limit));
  }

  res.status(200).json(result);
});

// GET single product
app.get("/v1/products/:id", (req, res) => {
  const product = products.find(p => p.id == req.params.id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.status(200).json(product);
});

// ===============================
// STEP 3: WRITE Operations
// ===============================

// POST /v1/orders
app.post("/v1/orders", (req, res) => {
  const newOrder = {
    id: Date.now(),
    ...req.body
  };

  orders.push(newOrder);

  res.status(201).json(newOrder);
});

// DELETE /v1/orders/:id
app.delete("/v1/orders/:id", (req, res) => {
  const index = orders.findIndex(o => o.id == req.params.id);

  if (index === -1) {
    return res.status(404).json({ message: "Order not found" });
  }

  orders.splice(index, 1);

  res.status(204).send();
});

// ===============================
// STEP 4: Nested Resources
// ===============================

// GET /v1/users/:userId/orders
app.get("/v1/users/:userId/orders", (req, res) => {
  const userOrders = orders.filter(o => o.userId == req.params.userId);
  res.status(200).json(userOrders);
});

// GET /v1/products/:productId/reviews
app.get("/v1/products/:productId/reviews", (req, res) => {
  const productReviews = reviews.filter(
    r => r.productId == req.params.productId
  );

  res.status(200).json(productReviews);
});

// ===============================
// Server Start
// ===============================
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});