var express  = require("express");
var router   = express.Router();
var Question = require("../models/question");

router.get("/new", function(req, res, next){
  res.render("questions/new", {errors: {}});
});

router.post("/", function(req, res){
  var question = new Question({title: req.body.title,
                               body:  req.body.body});

  question.save(function(err, question){
    // err object looks like:
    // errors:
    //    { title:
    //       { [ValidatorError: Path `title` is required.]
    //         message: 'Path `title` is required.',
    //         name: 'ValidatorError',
    //         properties: [Object],
    //         kind: 'required',
    //         path: 'title',
    //         value: '' } } }
    if(err){
      console.log(err);
      res.render("questions/new", {errors: err.errors});
    } else {
      console.log(question);
      res.redirect("/questions/" + question._id);
    }
  });
});

router.get("/:id", function(req, res){
  Question.findOne({_id: req.params.id}, function(err, question){
    if(err){
      res.render("error", {message: "Question not found!",
                          error: {status: 404}});
    } else {
      res.render("questions/show", {question: question});
    }
  });
});

module.exports = router;
