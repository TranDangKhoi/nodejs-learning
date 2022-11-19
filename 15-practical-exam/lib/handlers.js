exports.home = (req, res) => res.render("homepage");

exports.applyForJob = (req, res) => {
  res.render("apply");
};

exports.thanks = (req, res) => {
  res.render("thank-you");
};
