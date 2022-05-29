const { authSchema } = require("../helper/validate");

router.post("/insert", async (req, res, next) => {
  try {
    //console.log(req.body);

    const result = await authSchema.validateAsync(req.body);
    const doesExist = await User.findOne({ email: result.movieName });
    if (doesExist)
      throw createError.Conflict(`${result.email} is already been registered`);
    const user = new User(result);
    const savedUser = await user.save();
    const accessToken = await signAccessToken(savedUser.id);
    const refreshToken = await signRefreshToken(savedUser);
    res.send({ accessToken, refreshToken });
    res.send(savedUser);
  } catch (error) {
    if (error.isJoi === true) error.status = 422;
    next(error);
  }
});
