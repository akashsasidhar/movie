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
const movieClass = mongoose.model('movieClass', movieSchema);

const tenet = new movieClass({
    movieName : "Avengers",
    imdbRating: 8,
    cast: ["George David Washington, Robert Pattinson"],
    releaseDate: new Date('2020-12-04'),
    genre: "science-fiction",
    sequel: false
})

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
const User = mongoose.model("user", userSchema);
module.exports = User;
