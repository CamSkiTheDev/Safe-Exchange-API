const { Log } = require("../Models");
const { Router } = require("express");
const router = Router();

//index route
router.get("/", async (req, res) => {
  res.json(await Log.find({}).populate("videos"));
});

//create route
router.post("/", async (req, res) => {
  res.json(await Log.create(req.body));
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
router.get("/:id", async (req, res) =>{
  res.json(await Log.findById(req.params.id).populate("videos"));
});

// EXPORT ROUTER
module.exports = router;
