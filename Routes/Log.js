const { Log, User } = require("../Models");
const { Router } = require("express");
const router = Router();

//index route
router.get("/:uid", async (req, res) => {
  res.json(await Log.find({ userid: req.params.uid }).populate("videos"));
});

//create route
router.post("/", async (req, res) => {
  const log = await Log.create(req.body);

  const user = await User.findOne({ userid: req.body.userid });
  user.log.push(log._id);
  await user.save();

  res.json(log);
});

//update route
router.put("/:id", async (req, res) => {
  res.json(await Log.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

//delete route
router.delete("/:id", async (req, res) => {
  res.json(await Log.findByIdAndRemove(req.params.id));
});

//Show Route
router.get("/one/:id", async (req, res) => {
  res.json(await Log.findById(req.params.id).populate("videos"));
});

// EXPORT ROUTER
module.exports = router;
