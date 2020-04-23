/* 
    Building JavaScript Objects

    Objects are simlar to arrays, except that instead of using
    indexes to access and modifie thire data, we access data through properties.

    Objects can represent Real World objects, like cat.

    var cat = {
        "name": "Max",
        "age": 4,
        "friends": ["Duck", "Mice"]
    }

    we can assign any type of data as a value to properites.
    
    Quots are optional for single-word string properties.
    You can even use number as a propertie

    var cat = {
        name: "max",
        4: "leg"
    };

*/

var macBookPro = {
    "processor": "intel 2.4GHz",
    "weight": "2lbs",
    "ports": ["4 thunderbolts", "1 headphone Jack"]
}



/* 
    Accessing Object Properties with Dot Notation
    There are 2 ways to access properites in an object..

    1. Dot notation objName.propName
*/

var processor = macBookPro.processor;
console.log(processor);





/* 
    Accessing Object Properties with Bracket Notation
    This methode is usefule when you want to access a properites
    that the propertie name has a space, or more than 1 word

    ObjName["prop name"];
*/

var mcPorts = macBookPro["ports"]
console.log(mcPorts);

const courses = {
    "Javascript Basics": "9:30pm",
    "Basic CSS": "12:00am",
    "Starup School": "01:00am"
}

const jsCourse = courses["Javascript Basics"];
console.log(jsCourse);





/* 
    Accessing Object Properties with Variables
*/

const JSCourse = "Javascript Basics";
const jsTime = courses[JSCourse]

console.log(jsTime);




/* 
    Updating Object Properties
    After we create a JS Objec, we can update it's properties at any time
*/

var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

const newName = "Happy Camper";
ourDog.name = newName;
ourDog["legs"] = 3

console.log(ourDog.name);
console.log(ourDog.legs);




/* 
  Add New Properties to a JavaScript Object
  You can add new properties to existing JavaScript objects the same way you would modify them.
*/

ourDog.bark = "Bow-wow"; // add bark prop to ourDog

ourDog

// not that, in the previous step, we didnt' assign bark propertie to ourDog Object,
// but by assigning new properertie to the obj, it will automaticaly adds the prop





/* 
    Delete Properties from a JavaScript Object

    We can also delete properties from objects like this:
    delete objName.propName  or  delete objName[propName];
*/
delete ourDog.bark;
ourDog





/* 
  Using Objects for Lookups

  Objects can be thought of as a key/value storage, like a dictionary. 
  If you have tabular data, you can use an object to "lookup" values rather 
  than a switch statement or an if/else chain. 
  This is most useful when you know that your input data is limited to a certain range.

*/

function phoneticLookup(val) {
    var result = "";

    var lookup = {
        alpha: "Adams",
        bravo: "Boston",
        charlie: "Chicago",
        delta: "Denver",
        echo: "Easy",
        foxtrot: "Frank"
    }
    result = lookup[val];

    return result;
}

console.log(phoneticLookup("charlie"));
console.log(phoneticLookup("alpha"));
console.log(phoneticLookup(""));







/* 
  Testing Objects for Properties

  We can check if an Obj has a cirtain prop or not by using .hasOwnProperty methode

*/

console.log(ourDog.hasOwnProperty("bark"))


// create a function that takes 2 argumenst One is an obj and two is a prop
// the func should return the props if it was exist, else retrun "Not Found"

function checkProp(obj, checkedProp) {

    if (obj.hasOwnProperty(checkedProp)) {
        return obj[checkedProp];
    } else {
        return "Not Found";
    }
}

console.log(checkProp({
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
}, "gift"));
console.log(checkProp({
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
}, "house"));





/* 
    Manipulating Complex Objects
    Sometimes you may want to store data in a flexible Data Structure. 
    A JavaScript object is one way to handle flexible data. 
    They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.
*/

// an example of complex object
var myMusic = [{
        "artist": "Billy Joel",
        "title": "Piano Man",
        "release_year": 1973,
        "formats": [
            "CD",
            "8T",
            "LP"
        ],
        "gold": true
    },

    {
        "artist": "Alan Walker",
        "title": "Play",
        "release_year": 2015,
        "formats": [
            "CD",
            "8T",
            "LP",
            "TRACK"
        ]
    }
];

console.log(myMusic[1].artist);






/* 
    Accessing Nested Objects
    The sub-properties of objects can be accessed by chaining together the dot or bracket notation.

*/

var myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents);






/* 
  Accessing Nested Arrays
  Similar to accessing nested objects, Array bracket notation can be chained to access nested arrays.
*/
var ourPets = [{
        animalType: "cat",
        names: [
            "Meowzer",
            "Fluffy",
            "Kit-Cat"
        ]
    },
    {
        animalType: "dog",
        names: [
            "Spot",
            "Bowser",
            "Frankie"
        ]
    }
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"




// Project: Record Collection
/* 
  Write a function which takes an album's id (like 2548), 
  a property prop (like "artist" or "tracks"), 
  and a value (like "Addicted to Love") to modify the data in this collection.

1. If prop isn't "tracks" and value isn't empty (""), 
update or set the value for that record album's property.

Your function must always return the entire collection object.

There are several rules for handling incomplete data:

2. If prop is "tracks" but the album doesn't have a "tracks" property, 
create an empty array before adding the new value to the album's corresponding property.

3. If prop is "tracks" and value isn't empty (""), 
push the value onto the end of the album's existing tracks array.

4. If value is empty (""), delete the given prop property from the album.


*/

// Setup
var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        album: "ABBA Gold"
    }
};


function updateRecords(id, prop, value) {

    // if value is empty, delete the given prop
    if (value == "") {
        delete collection[id][prop];
    } 
    
    // if prop is not "track" and value is not empty
    else if (prop != "tracks" && value != "") {
        collection[id][prop] = value;
    } 
    
    //If prop is "tracks" but the album doesn't have a "tracks" property, 
    else if (prop == "tracks" && !collection[id].hasOwnProperty(prop)) {
        let tracks = [];
        tracks.push(value)
        collection[id][prop] = tracks;
    } 
    
    // if props is "tracks" and value is not empty
    else if (prop == "tracks" && value != "") {
        collection[id][prop].push(value);
    }

    return collection;
}


console.log(updateRecords(5439, "artist", "ABBA"));
console.log(updateRecords(2548, "album", ""));




