/*
 * GET employees listing.
 */

import Pet from "../models/Pet";
var PetsController:any = {};

PetsController.list = function(_req:any, res:any) {
    Pet.find({}).exec(function (err: any, pets: any) {
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

PetsController.show = function(req:any, res:any) {
    Pet.findOne({_id: req.params.id}).exec(function (err:any, pet:any) {
    if (err) {
    console.log("Error:", err);
    }
    else {
    res.render("../views/detail", {title: 'Detail of pet', pet: pet});
    }
});
};

PetsController.create = function(_req:any, res:any) {
    res.render("../views/add", {title: "Add new pet"});
  };


PetsController.save = function(req:any, res:any) {
  var pet = new Pet(req.body);
  pet.CreatedDate = new Date();
  pet.UpdatedDate = new Date();
  console.log(pet);
  pet.save(function(err:any) {
      if(err) {
      console.log(err);
      res.render("../views/add");
      } else {
      console.log("Successfully created an pet.");
      res.redirect("/pets/show/"+pet._id);
      }
  });
};

PetsController.edit = function(req:any, res:any) {
    Pet.findOne({_id: req.params.id}).exec(function (err:any, pet:any) {
      if (err) {
        console.log("Error:", err);
      }
      else {
        res.render("../views/edit", {pet: pet});
      }
    });
  };


PetsController.update = function(req:any, res:any) {
  console.log("Call here");
  Pet.findByIdAndUpdate(req.body.id, { $set: { Name: req.body.Name, Avatar: req.body.Avatar, Description: req.body.Description, UpdatedDate: new Date() }}, { new: true }, function (err:any, pet:any) {
      if (err) {
      console.log(err);
      res.render("../views/edit", {title: "Edit Pet", pet: req.body});
      }else
      res.redirect("/pets/show/" + pet._id);
  });
};

PetsController.delete = function(req:any, res:any) {
    Pet.remove({_id: req.params.id}, function(err:any) {
      if(err) {
        console.log(err);
      }
      else {
        console.log("Pet deleted!");
        res.redirect("/pets/list");
      }
    });
  };

  module.exports = PetsController;