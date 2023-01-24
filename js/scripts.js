//Business logic

function PlacesIveBeen() {
  this.location = {};
  this.currentId = 0
}

PlacesIveBeen.prototype.addId = function(){
  this.currentId += 1;
  return this.currentId;
}

PlacesIveBeen.prototype.addDestination = function(destination){
  destination.id = this.addId();
  this.location[destination.id] = destination;
}

function Destination(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}


//UI logic




function displayThings() {
  const place1HTML = document.getElementById('place1')
  const place2HTML = document.getElementById('place2')

  let placesIveBeen = new PlacesIveBeen;
  let destination2 = new Destination('NYC', ['Empire State Building'], 'Spring', ['good food']);
  let destination1 = new Destination('Seattle', ['Space Needle'], 'Summer', ['vacation']);
  placesIveBeen.addDestination(destination1);
  placesIveBeen.addDestination(destination2);
  const divEl = document.createElement('div');
  place1HTML.append(divEl);
  place2HTML.append(divEl);
  place1HTML.firstChild.innerText = placesIveBeen.location[1].location;
  place1HTML.id = placesIveBeen.location[1].location;
  place2HTML.firstChild.innerText = placesIveBeen.location[1].location;
  place2HTML.id = placesIveBeen.location[1].location;

  document.getElementById(placesIveBeen.location[1].location).addEventListener('click', location1Func);
  return place1HTML.id = placesIveBeen.location[1].location;

}

function showDetails() {
  document.getElementById("Seattle").addEventListener("click", location1Func)
  // document.getElementById("Seattle").addEventListener("click", location2Func)
}

function location1Func(){
  let placesIveBeen = new PlacesIveBeen;
  let destination1 = new Destination('Seattle', ['Space Needle'], 'Summer', ['vacation']);
  placesIveBeen.addDestination(destination1);
  let destinationElement = document.getElementById('Seattle');
  delete(placesIveBeen.location[1].id);
  delete(placesIveBeen.location[1].location);
  for(const [key, value] of Object.entries(destination1)) {
    let liElement = document.createElement('li');
    liElement.innerText = (`${key}: ${value}`);
    destinationElement.append(liElement);
  }
}




window.addEventListener('load', function() {
  document.getElementById("check").addEventListener("click", displayThings);
  
});

// //Business logic

// function PlacesIveBeen() {
//   this.location = {};
//   this.currentId = 0
// }

// PlacesIveBeen.prototype.addId = function(){
//   this.currentId += 1;
//   return this.currentId;
// }

// PlacesIveBeen.prototype.addDestination = function(destination){
//   destination.id = this.addId();
//   this.location[destination.id] = destination;
// }

// function Destination(location, landmarks, timeOfYear, notes) {
//   this.location = location;
//   this.landmarks = landmarks;
//   this.timeOfYear = timeOfYear;
//   this.notes = notes;
// }
