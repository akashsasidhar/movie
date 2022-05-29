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
  
      const result = await authSchema.validateAsync(req.body);
  
      const movie = new Movie(result);
      const savedMovie = await movie.save();
  
      res.send(savedMovie);
    } catch (error) {
      if (error.isJoi === true) error.status = 422;
      next(error);
    }
  });
  
