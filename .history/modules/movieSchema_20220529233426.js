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
        const movieObjects = await Movie.collection.findOneAndUpdate(
            {movieName: movieName}, 
            $set: {
                sequel: sequel_new,
                imdbRating: rating
            }
        }
      next();
    } catch (error) {
      next(error);
    }
  });
  
async function update(movieName, rating, rating, ){

    const movieObjects = await movieClass.collection.findOneAndUpdate(
        {movieName: movieName}, 
        { 
            $set: {
                sequel: sequel_new,
                imdbRating: rating
            }
        }
        );
    return movieObjects
}

const Movie = mongoose.model("movie", movieSchema);
module.exports = User;
