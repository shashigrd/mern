const mongooes = require("mongoose");

const contactSchema = new mongooes.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports = mongooes.model("contact-collection", contactSchema);
