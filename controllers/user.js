const getAllUsers = (req, res) => {
  console.log("get all users controller");
  res.json({ message: "ok" });
};

module.exports = {
  getAllUsers,
};
