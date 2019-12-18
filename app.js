const express = require('express');
const app = express();
var mongoose = require('mongoose');
const port = 3000;

mongoose.connect('mongodb://localhost/yelp_camp', {useNewUrlParser: true});







// SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
   name: String,
   image: String,
   description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

 Campground.create(
      {
          name: "Granite Hill", 
         image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg",
         description: "This is a huge granite hill, no bathrooms.  No water. Beautiful granite!"
         
      },
      function(err, campground){
       if(err){
          console.log(err);
      } else {
          console.log("NEWLY CREATED CAMPGROUND: ");
          console.log(campground);
       }
    });







app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));