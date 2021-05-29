const {Video, Log} = require("../Models");
const { Router } = require("express");
const router = Router();

//index route
router.get("/", async (req, res) => {
  res.json(await Video.find({}));
});

//create route
router.post("/:logId", async (req, res) => {
  const video = await Video.create(req.body);
  const log = await Log.findById(req.params.logId);

  log.videos.push(video._id)
  video.log = log._id
  
  await log.save()
  await video.save()

  res.json(video)
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
  res.json(await Video.findById(req.params.id));
});

// EXPORT ROUTER
module.exports = router;