const { Schema, model } = require('mongoose');
///////////////////////////////
// MODELS
////////////////////////////////
const VideoidSchema = new Schema(
  {
  URL: String,
  log: String,
  },
    { timestamps: true }
);

const ObjectidSchema = new Schema(
  {
  Time: String,
  Geoposition: String,
  isActive: Boolean,
  video: [Videoid],
  },
    { timestamps: true }
);

const UserSchema = new Schema(
  {
  userid: String,
  name: String,
  email: String,
  log: [Objectid],
  },
    { timestamps: true }
);

const User = model("User", UserSchema);

module.exports = User;