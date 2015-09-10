// boilerplate code
var express = require('express'),
    app = express();

// set view engine to ejs
app.set('view engine', 'ejs');

// array of puppies
puppies = [{
    name: "Pluto",
    age: 20,
    id: 0
}];
var newId = 1;
// setting the root
app.get('/', function(req, res) {
    res.render('index', {
        puppies: puppies
    }); //key left value right
});


// GET request for new puppies
app.get('/puppies/new', function(req, res) {
    res.render('puppies/new');
});

// adding puppies to array save puppies
app.get('/puppies', function(req, res) {
    newPuppy = {};
    newPuppy.name = req.query.name;
    newPuppy.age = req.query.age;
    puppies.push(newPuppy);
    newPuppy.id = newId;
    newId++;
    console.log(newPuppy);
    res.redirect('/');
    // console.log(req.query);
});

//getting a puppy by dynamic id
app.get('/puppies/:pupid', function(req, res) {
    //assigns value to pupid
    var pupid = req.params.pupid;
    //creates a placeholder value
    var currentpup;
    //loops through puppy object array
    for (var i = 0; puppies.length > i; i++) {
        //if puppies array at index[i] is equal to pup id
        if (puppies[i].id == pupid) {
            //once this evaluates to true currentpup is equal to puppies[i]
            currentpup = puppies[i];
        }
    }
    //render the pupid ejs file and pass it the current pup key value pair
    res.render('puppies/pupid', {
        currentpup: currentpup
    });

});




// start server
app.listen(3000, function() {
    console.log('server running on port 3000');
});