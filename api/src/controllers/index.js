const { Comment } = require("../db");

const getAllComments = async (req, res) => {
  try {
    return await Comment.findAll().then((data) => {
      if (data !== null) {
        res.status(200).send(data);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

const addComment = async (req, res) => {
  try {
    const comment = await Comment.create(req.body);
    res.status(200).json({ success: true });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  addComment,
  getAllComments,
};
