// Creat a function that takes 2 arguments (prop, value)
// the function adds the prop and value to an exsiting object


const skillSet = {
    frontEnd: ["JS", "CSS", "HTML"],
    uxDesign: ["Research", "Wireframe", "Prototype"]
}

skillSet;


function updateProp(prop, value) {

    if ( !skillSet.hasOwnProperty(prop) ) {
        skillSet[prop]= value;
    }
    
    return skillSet;
}


updateProp("backend", "Python")
updateProp("backend", "Python")

skillSet;