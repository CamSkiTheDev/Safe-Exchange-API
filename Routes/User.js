const {User} = require("../Models");
const { Router } = require("express");
const router = Router();

//index route
router.get("/", async (req, res) => {
  res.json(await User.find({}).populate("log"));
});

//create route
router.post("/", async (req, res) => {
  res.json(await User.create(req.body));
});

//update route
router.put("/:id", async (req, res) => {
  res.json(await User.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

//delete route
router.delete("/:id", async (req, res) => {
  res.json(await User.findByIdAndRemove(req.params.id));
});

//Show Route 
router.get("/:id", async (req, res) =>{
  res.json(await User.findOne({userid:req.params.id}).populate("log"));
});

// EXPORT ROUTER
module.exports = router;