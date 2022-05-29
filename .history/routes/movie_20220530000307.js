const { authSchema } = require("../helper/validate");
const Movie = require("../modules/movieSchema");
router.post("/insert", async (req, res, next) => {
  try {
    //console.log(req.body);

    const result = await authSchema.validateAsync(req.body);

    const movie = new Movie(result);
    const savedMovie = await movie.save();

    res.send(savedMovie);
  } catch (error) {
    if (error.isJoi === true) error.status = 422;
    next(error);
  }
});

router.post("/update", async (req, res, next) => {
  try {
    //console.log(req.body);

    const movie = new Movie(req.body);
    const update = await movie.update();

    res.send(update);
  } catch (error) {
    if (error.isJoi === true) error.status = 422;
    next(error);
  }
});

router.post("/delete", async (req, res, next) => {
  try {
    //console.log(req.body);

    const movie = new Movie(req.body.movieName);
    const update = await movie.update();

    res.send(update);
  } catch (error) {
    if (error.isJoi === true) error.status = 422;
    next(error);
  }
});
