
const productService = require("../services/product.services.js")

// Create a new product
async function createProduct(req, res) {
  try {
    const product = await productService.createProduct(req.body);
    return res.status(201).send(product);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
}

// Delete a product by ID
async function deleteProduct(req, res) {
  const productId = req.params.id;
  try {
    const productId = req.params.id;
    const message = await productService.deleteProduct(productId);
    return res.send({ message });
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
}

// Update a product by ID
async function updateProduct(req, res) {
  const productId = req.params.id;
  try {
    const product = await productService.updateProduct(productId, req.body);
    return res.send(product);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}

// Get all products
async function getAllProducts(req, res) {
  const productId = req.params.id;
  try {
    const product = await productService.getAllProducts(req.quary);
    res.send(product);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
}


// Find a product by ID
async function findProductById(req, res) {
  const productId = req.params.id;
  try {
    const product = await productService.findProductById(productId);
    return res.status(200).send(product);
  } catch (err) {
    return res.status(404).send({ message: err.message });
  }
}

// Find products by category
// async function findProductByCategory(req, res) {
//   const category = req.params.category;
//   try {
//     const products = await productService.findProductByCategory(category);
//     res.send(products);
//   } catch (err) {
//     res.status(500).send({ error: err.message });
//   }
// }

// Search products by query
// async function searchProduct(req, res) {
//   const query = req.params.query;
//   try {
//     const products = await productService.searchProduct(query);
//     res.send(products);
//   } catch (err) {
//     res.status(500).send({ error: err.message });
//   }
// }

const createMultipleProduct= async (req, res) => {
  try {
    await productService.createMultipleProduct(req.body)
    res
      .status(202)
      .send({ message: "Products Created Successfully", success: true });
  } catch (error) {
    res.status(500).send({ error: "Something went wrong" });
  }
};

module.exports = {
  createProduct,
  deleteProduct,
  updateProduct,
  getAllProducts,
  createMultipleProduct,
  findProductById

};
