const User = require("./../models/index").User;
const get = async (req, res) => {
  // res.send("users");
  let user = await User.find();
  res.send(user);
};
const create = async (req, res) => {
  try {
    console.log(req.body);
    const model = new User(req.body);
    let user = await model.save();
    res.send(user);
  } catch (error) {
    console.log(error);
  }
};
const update = async (req, res) => {
  let user = await User.updateOne({ _id: req.params.id }, { $set: req.body });
  res.send(user);
};
const remove = async (req, res) => {
  let user = await User.deleteOne({ _id: req.params.id });
  res.send(user);
};

module.exports = {
  get,
  create,
  update,
  remove
};
