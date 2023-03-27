const examplesDatabase = require("./examples.mongo");

function httpGetAllExamples(skip, limit) {
  return examplesDatabase
    .find(
      {},
      {
        _id: 0,
        __v: 0,
      }
    )
    .sort({ createdAt: 1 })
    .skip(skip)
    .limit(limit);
}

async function httpGetExampleById(id) {
  return await examplesDatabase.findOne({ id });
}

async function httpCreateExample(example) {
  return await examplesDatabase.create(example);
}

async function httpUpdateExample(id, example) {
  const updatedExample = await examplesDatabase.findOneAndUpdate(
    { id },
    example,
    {
      new: true,
    }
  );
  return updatedExample;
}

async function httpDeleteExample(id) {
  const deletedExample = await examplesDatabase.findOneAndDelete({ id });
  return deletedExample;
}

module.exports = {
  httpGetAllExamples,
  httpGetExampleById,
  httpCreateExample,
  httpUpdateExample,
  httpDeleteExample,
};
