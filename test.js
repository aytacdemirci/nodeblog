const mongoose = require("mongoose");
const Post = require("./models/Post");

mongoose.connect("mongodb://127.0.0.1/nodeblog_test_db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Post.create(
  {
    title: "Benim ilk post başlığım",
    content: "Post içeriği,lorem ipsum text",
  },
  (error, post) => {
    console.log(error, post);
  }
);

Post.create(
  {
    title: "Benim ikinci post başlığım",
    content: "Post içeriği,lorem ipsum text",
  },
  (error, post) => {
    console.log(error, post);
  }
);
