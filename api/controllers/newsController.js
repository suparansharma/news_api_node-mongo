const News = require("./../models/index").News;
const get = async (req, res) => {
  // res.send("users");
  let news = await News.find();
  res.send(news);
};
const create = async (req, res) => {
  try {
    console.log(req.body);
    const model = new News(req.body);
    let news = await model.save();
    res.send(news);
  } catch (error) {
    console.log(error);
  }
};
const update = async (req, res) => {
  let news = await News.updateOne({ _id: req.params.id }, { $set: req.body });
  res.send(news);
};
const remove = async (req, res) => {
  let news = await News.deleteOne({ _id: req.params.id });
  res.send(news);
};

module.exports = {
  get,
  create,
  update,
  remove
};
