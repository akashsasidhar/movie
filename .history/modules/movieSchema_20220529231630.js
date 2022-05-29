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
const movieClass = mongoose.model("movieClass", movieSchema);

const movie = new movieClass({
  movieName: "Avengers",
  rating: 10,
  cast: ["Hulk, Captain America, Thor, Thanos"],
  genre: "cartoon",
  releaseDate: new Date("2016-03-28"),
});
const result = movie.save();

userSchema.pre("save", async function (next) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    next();
  } catch (error) {
    next(error);
  }
});
userSchema.methods.isValidPassword = async function (password) {
  try {
    return await bcrypt.compare(password, this.password);
  } catch (error) {
    throw error;
  }
};
const Movie = mongoose.model("movie", userSchema);
module.exports = User;
