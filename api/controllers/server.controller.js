const ServerModel = require("../modals/server.model");
const ObjectId = require("mongoose").Types.ObjectId;

//Creating server for specific dofus category
module.exports.createServer = async (req, res) => {
  const {
    serverName,
    serverCategory,
    image,
    serverStatus,
    serverPrice,
    serverMinQty,
  } = req.body;

  try {
    const createdServer = await ServerModel.create({
      serverName,
      serverCategory,
      image,
      serverStatus,
      serverPrice,
      serverMinQty,
    });

    res.status(200).json(createdServer );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Get server by category
module.exports.getServers = async (req, res) => {
  const serverCat = req.query.type;
  try {
    const servers = await ServerModel.find({ serverCategory: serverCat });
    res.status(200).json(servers);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

//Update single server
module.exports.updateServer = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id))
    return res.status(400).json({ error: "Invalid id" });

  const server = await ServerModel.findById(id);
  const serverN = server.serverName;
  const statu = server.serverStatus;
  const pric = server.serverPrice;
  const minQty = server.serverMinQty;

  try {
    const serverUpdated = await ServerModel.findByIdAndUpdate(id, {
      $set: {
        serverName: req.body.serverName ? req.body.serverName : serverN,
        status: req.body.serverStatus ? req.body.serverStatus : statu,
        price: req.body.serverPrice ? req.body.serverPrice : pric,
        serverMinQty: req.body.serverMinQty ? req.body.serverMinQty : minQty,
      },
    });
    res.status(200).json(serverUpdated);
  } catch (error) {
    res.status(400).json(error);
  }
};

//Get single Server
module.exports.getServer = async (req, res) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id))
    return res.status(400).json({ Message: "Invalid ID" });

  try {
    const getOneServer = await ServerModel.findById(id);
    res.status(200).json(getOneServer);
  } catch (error) {
    res.status(400).json(error);
  }
};

//Get all server
module.exports.getAllServers = async (req, res) => {
  try {
    const allServers = await ServerModel.find();
    res.status(200).json(allServers);
  } catch (error) {
    res.status(400).json({ message: error });
  }
};

//Delete single server
module.exports.deleteServer = async (req, res) => {
  const { id } = req.params;

  if (!ObjectId.isValid(id))
    return res.status(400).json({ Message: "Invalid ID" });

  try {
    const deletedServer = await ServerModel.findByIdAndDelete(id);
    res.status(200).json(deletedServer);
  } catch (error) {
    res.status(400).json(error);
  }
};
