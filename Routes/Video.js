const {Video} = require("../Models");
const { Router } = require("express");
const router = Router();

//index route
router.get("/", async (req, res) => {
  res.json(await Video.find({}));
});

//create route
router.post("/", async (req, res) => {
  res.json(await Video.create(req.body));
});

//update route
router.put("/:id", async (req, res) => {
  res.json(await Video.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

//delete route
router.delete("/:id", async (req, res) => {
  res.json(await Video.findByIdAndRemove(req.params.id));
});

//Show Route 
router.get("/:id", async (req, res) =>{
  res.json(await Video.findOne(req.params.id));
});

// EXPORT ROUTER
module.exports = router;