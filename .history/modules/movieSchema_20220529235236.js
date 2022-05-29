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

movieSchema.findOne({ movieName: movieName }).update(body).exec();

function(err, contact) {
    if(!err) {
        if(!contact) {
            contact = new ContactSchema();
            contact.phone = request.phone;
        }
        contact.status = request.status;
        contact.save(function(err) {
            if(!err) {
                console.log("contact " + contact.phone + " created at " + contact.createdAt + " updated at " + contact.updatedAt);
            }
            else {
                console.log("Error: could not save contact " + contact.phone);
            }
        });
    }
});
const Movie = mongoose.model("movie", movieSchema);
module.exports = User;
