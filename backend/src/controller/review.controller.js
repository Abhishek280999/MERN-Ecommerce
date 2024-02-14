
const reviewService = require('../services/review.services.js');

const createReview = async (req, res) => {
  const user = req.user
  const reqBody = req.body;
  try {
    const review =await reviewService.createReview(reqBody, user);
    return res.status(201).send(review);
  } catch (error) {
    return res.status(500).send({ error: 'Something went wrong' });
  }
};

const getAllReview = async (req, res) => {
  const productId = req.params.productId;
  try {
    const reviews =await reviewService.getAllReview(productId);
    return res.status(200).send(reviews);
  } catch (error) {
    return res.status(500).send({ error: 'Something went wrong' });
  }
};

module.exports = {createReview,getAllReview}
