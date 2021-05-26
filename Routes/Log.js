const { Log } = require("../Models");
const { Router } = require("express");
const router = Router();

//index route
router.get("/", async (req, res) => {
  res.json(await Log.find({}));
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

// EXPORT ROUTER
module.exports = router;
