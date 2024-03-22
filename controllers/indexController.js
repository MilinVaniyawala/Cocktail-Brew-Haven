exports.getIndex = async (request, response) => {
  try {
    response.render("index");
  } catch (error) {
    response.status(500).send("Internal Server Error!!");
  }
};
