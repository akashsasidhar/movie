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

movieSchema.pre(
  "update",
  async function (movieName, rating_new, cast_new, genre_new, releaseDate_new, next) {
    try {
      const movieObjects = await Movie.collection.findOneAndUpdate(
        { movieName: movieName },
        {
          $set: {
            rating: rating_new,
            cast: cast_new,
            genre: genre_new,
          },
        }
      );
      next();
    } catch (error) {
      next(error);
    }
  }
);

async function update(movieName, rating, cast, genre, releaseDate) {
  const movieObjects = await movieClass.collection.findOneAndUpdate(
    { movieName: movieName },
    {
      $set: {
        sequel: sequel_new,
        imdbRating: rating,
      },
    }
  );
  return movieObjects;
}

const Movie = mongoose.model("movie", movieSchema);
module.exports = User;
