const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const movieSchema = new Schema({
  movieName: String,
  rating: Number,
  cast: [String],
  genre: String,
  releaseDate: Date,
});

movieSchema.pre("save", async function (next) {
  try {
    console.log("saved successfully");
    next();
  } catch (error) {
    next(error);
  }
});

movieSchema.pre("update", async function (next) {
  try {
    console.log("saved successfully");
    next();
  } catch (error) {
    next(error);
  }
});

movieSchema.findOne({ movieName: movieName }).update(body).exec();

const Movie = mongoose.model("movie", movieSchema);
module.exports = Movie;
