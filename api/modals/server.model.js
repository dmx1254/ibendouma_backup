// Server model creating with mongoose

//This model stock all server dofus

const mongoose = require("mongoose");

const serverSchema = new mongoose.Schema(
  {
    serverName: {
      type: String,
      required: true,
      unique: true,
    },

    serverCategory: {
      type: String,
      required: true,
    },

    image: {
      type: String,
    },

    serverStatus: {
      type: String,
      required: true,
    },

    serverPrice: {
      type: Number,
      required: true,
    },
    serverMinQty: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const ServerModel = mongoose.model("server", serverSchema);
module.exports = ServerModel;
