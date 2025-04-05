const Resource = require("../models/resources"); 


exports.getAllResources = async (req, res) => {
  try {
    const resources = await Resource.find();
    res.json(resources);
  } catch (error) {
    res.status(500).json({ message: "Error fetching resources", error });
  }
};


exports.addResource = async (req, res) => {
  try {
    const { title, description, icon, link } = req.body;
    const newResource = new Resource({ title, description, icon, link });
    await newResource.save();
    res.status(201).json({ message: "Resource added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error adding resource", error });
  }
};


exports.updateResource = async (req, res) => {
  try {
    await Resource.findByIdAndUpdate(req.params.id, req.body);
    res.json({ message: "Resource updated" });
  } catch (error) {
    res.status(500).json({ message: "Error updating resource", error });
  }
};


exports.deleteResource = async (req, res) => {
  try {
    await Resource.findByIdAndDelete(req.params.id);
    res.json({ message: "Resource deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting resource", error });
  }
};
