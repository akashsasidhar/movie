const Joi = require("@hapi/joi");
const authSchema = Joi.object({
    movieName: Joi.string().required(),
    rating: Joi.number().min(2).required(),
});

module.exports = {
  authSchema,
};
movieName: "Avengers",
rating: 10,
cast: ["Hulk, Captain America, Thor, Thanos"],
genre: "cartoon",
releaseDate: new Date("2016-03-28"),