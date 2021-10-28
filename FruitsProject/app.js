const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/peopleDB");

const fruitSchema = mongoose.Schema({
  name: {
    type: String,
    required: ["Why no name?"]
  },
  score: {
    type: Number,
    min: 0,
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const pineapple = Fruit({
//   name: "Pinneapple",
//   score: 9,
//   review: "Something pretty good!"
// });

// pineapple.save();

const orange = Fruit({
  name: "orange",
  score: 7,
  review: "Iyyy"
});

orange.save();

const personSchema = mongoose.Schema({
  name: {
    type: String,
    required: ["Why no name?"]
  },
  age: Number,
  favoriteFruit: fruitSchema
});



const Person = mongoose.model("Person", personSchema);
// const person_1 = new Person({
//   name: "Vuqar",
//   age: 19,
//   favoriteFruit: pineapple
// });


Person.updateOne({"_id": "6150c637f8196cc5c42e2b3e"}, {"favoriteFruit": orange}, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Successfully modified!");
  }
});
// const person_2 = new Person({
//   age: 50
// });

// Person.insertMany([person_1, person_2], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Success!");
//   }
// });


// Person.updateOne({"_id": "61509329c2fea65e26cd3d67"}, {name: "Dan Brown"}, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated!");
//   }
// });


// Person.deleteOne({"_id": "61509329c2fea65e26cd3d67"}, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted!");
//   }
// });



// Person.find(function (err, fruits) {
//   if(err) {
//     console.log(err);
//   } else {
//     mongoose.connection.close();
//     fruits.forEach(function (element) {
//       console.log(element.name);
//     });
//   }
// });


