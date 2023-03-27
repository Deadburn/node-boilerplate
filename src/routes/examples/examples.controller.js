const { getPagination } = require("../../services/query");
const {
  httpGetAllExamples,
  httpGetExampleById,
  httpCreateExample,
  httpUpdateExample,
  httpDeleteExample,
} = require("../../models/examples/examples.model");

async function createExample(req, res) {
  try {
    const example = req.body;

    await httpCreateExample(req.body);

    res.status(201).json(example);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getExamples(req, res) {
  try {
    const { skip, limit } = getPagination(req.query);

    const examples = await httpGetAllExamples(skip, limit);
    return res.status(200).json(examples);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getExample(req, res) {
  try {
    const { id } = req.params;
    const example = await httpGetExampleById(id);
    if (!example) {
      return res.status(404).json({ message: "Example not found" });
    }
    return res.status(200).json(example);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function updateExample(req, res) {
  try {
    const { id } = req.params;
    const example = await httpUpdateExample(id, req.body);
    if (!example) {
      return res.status(404).json({ message: "Example not found" });
    }
    res.status(200).json(example);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function deleteExample(req, res) {
  try {
    const { id } = req.params;
    const example = await httpDeleteExample(id);
    if (!example) {
      return res.status(404).json({ message: "Example not found" });
    }
    res.status(200).json(example);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

module.exports = {
  createExample,
  getExample,
  getExample,
  updateExample,
  deleteExample,
};
