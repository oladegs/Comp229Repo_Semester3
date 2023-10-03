var express = require("express"); // install express
var router = express.Router(); // Create a new router

// Making a get request ; res.render - render a page and pass an object with a value
/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Home",
  });
});

/* GET home page. */
router.get("/home", function (req, res, next) {
  res.render("index", {
    title: "Home",
  });
});

/* GET About us page */
router.get("/about", function (req, res, next) {
  res.render("about", { title: "About" });
});

/* GET Products page */
router.get("/projects", function (req, res, next) {
  res.render("projects", {
    title: "Projects",
  });
});

/* GET Services page */
router.get("/services", function (req, res, next) {
  res.render("services", { title: "Services" });
});

/* GET Contact page */
router.get("/contact", function (req, res, next) {
  res.render("contact", { title: "Contact" });
});

//
module.exports = router;
