const Joi = require("@hapi/joi");
const authSchema = Joi.object({
    movieName: Joi.string().required(),
    rating: Joi.number().max(2).required(),
    cast: Joi.array().required(),
    genre: Joi.string().required(),
    release: Joi.date().required(),
});

module.exports = {
  authSchema,
};
movieName: "Avengers",
rating: 10,
cast: ["Hulk, Captain America, Thor, Thanos"],
genre: "cartoon",
releaseDate: new Date("2016-03-28"),