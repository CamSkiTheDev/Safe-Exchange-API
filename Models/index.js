const { Schema, model, Types } = require("mongoose");
///////////////////////////////
// MODELS
////////////////////////////////
const VideoSchema = new Schema(
  {
    URL: String,
    log: {
      type: Types.ObjectId,
      ref: "Log",
    },
  },
  { timestamps: true }
);

const LogSchema = new Schema(
  {
    time: String,
    userid: String,
    geoposition: String,
    isActive: Boolean,
    videos: [
      {
        type: Types.ObjectId,
        ref: "Video",
      },
    ],
  },
  { timestamps: true }
);

const UserSchema = new Schema(
  {
    userid: String,
    name: String,
    email: String,
    log: [
      {
        type: Types.ObjectId,
        ref: "Log",
      },
    ],
  },
  { timestamps: true }
);

const User = model("User", UserSchema);
const Log = model("Log", LogSchema);
const Video = model("Video", VideoSchema);

module.exports = { User, Log, Video };
