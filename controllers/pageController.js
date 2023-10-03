const homePage = (req, res) => {
  res.render("home", { pageTitle: "Project 2 Starter" });
};

module.exports = {
  homePage,
};
