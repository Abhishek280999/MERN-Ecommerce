
const ratingService = require('../services/rating.services.js');

const createRating= (req, res) => {
  const user = req.user
  const reqBody = req.body;
  try {
    const rating = ratingService.createRating(reqBody, user);
    res.status(202).send(rating);
  } catch (error) {
    res.status(500).send({ error: 'Something went wrong' });
  }
};

const getAllRatings=async (req, res) => {
  const productId = req.params.productId;
  try {
    const ratings =await ratingService.getAllRatings(productId);
    res.status(200).send(ratings);
  } catch (error) {
    res.status(500).send({ error: 'Something went wrong' });
  }
};

module.exports = {getAllRatings,createRating}
