const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const movieSchema = new mongoose.Schema({
  movieName: String,
  rating: Number,
  cast: [String],
  genre: String,
  releaseDate: Date,
});

const movie = new movieClass({
  movieName: "Avengers",
  rating: 10,
  cast: ["Hulk, Captain America, Thor, Thanos"],
  genre: "cartoon",
  releaseDate: new Date("2016-03-28"),
});
const result = movie.save();

movieSchema.pre("save", async function (next) {
  try {
      console.log()
    next();
  } catch (error) {
    next(error);
  }
});

const Movie = mongoose.model("movie", movieSchema);
module.exports = User;
