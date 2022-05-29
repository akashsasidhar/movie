const { authSchema } = require("../helper/validate");
const Movie = require("../modules/mo");
router.post("/insert", async (req, res, next) => {
  try {
    //console.log(req.body);

    const result = await authSchema.validateAsync(req.body);
  
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
