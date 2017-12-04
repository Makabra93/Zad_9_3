// scripts.js

var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur = 'Triceratops';
var upperDinosaur = dinosaur.toUpperCase();
var textFixed = text.replace('Velociraptor', upperDinosaur);


console.log(textFixed.substr(0, textFixed.length/2));

