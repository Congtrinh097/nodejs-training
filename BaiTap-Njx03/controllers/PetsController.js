/*
 * GET employees listing.
 */

var Pet = require('../models/Pet');
var PetsController = {};

PetsController.list = function(req, res) {
    Pet.find({}).exec(function (err, pets) {
      console.log("LIST PETS: ");
      console.log(pets);
      if (err) {
        console.log("Error:", err);
      }
      else {
        res.render("../views/list", {title: "List of your pets", pets: pets});
      }
    });
  };

PetsController.show = function(req, res) {
    Pet.findOne({_id: req.params.id}).exec(function (err, pet) {
    if (err) {
    console.log("Error:", err);
    }
    else {
    res.render("../views/detail", {title: 'Detail', pet: pet});
    }
});
};

PetsController.create = function(req, res) {
    res.render("../views/add", {title: "Add new pet"});
  };


PetsController.save = function(req, res) {
  var pet = new Pet(req.body);
  pet.CreatedDate = new Date();
  pet.UpdatedDate = new Date();
  console.log(pet);
  pet.save(function(err) {
      if(err) {
      console.log(err);
      res.render("../views/add");
      } else {
      console.log("Successfully created an pet.");
      res.redirect("/pets/show/"+pet._id);
      }
  });
};

PetsController.edit = function(req, res) {
    Pet.findOne({_id: req.params.id}).exec(function (err, pet) {
      if (err) {
        console.log("Error:", err);
      }
      else {
        res.render("../views/edit", {pet: pet});
      }
    });
  };


PetsController.update = function(req, res) {
Pet.findByIdAndUpdate(req.params.id, { $set: { name: req.body.name, address: req.body.address, position: req.body.position, salary: req.body.salary }}, { new: true }, function (err, pet) {
    if (err) {
    console.log(err);
    res.render("../views/edit", {title: "Edit Pet", pet: req.body});
    }
    res.redirect("/pets/show/"+pet._id);
});
};

PetsController.delete = function(req, res) {
    Pet.remove({_id: req.params.id}, function(err) {
      if(err) {
        console.log(err);
      }
      else {
        console.log("Pet deleted!");
        res.redirect("pets/list");
      }
    });
  };

  module.exports = PetsController;