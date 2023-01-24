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
  const placesIveBeen = new PlacesIveBeen;
  let destination2 = new Destination('NYC', ['Empire State Building'], 'Spring', ['good food']);
  let destination1 = new Destination('Seattle', ['Space Needle'], 'Summer', ['vacation']);
  placesIveBeen.addDestination(destination1);
  placesIveBeen.addDestination(destination2);
  const divEl = document.createElement('div');
  const divEl2 = document.createElement('div');
  place1HTML.append(divEl);
  place2HTML.append(divEl2);
  place1HTML.firstChild.innerText = placesIveBeen.location[2].location;
  place1HTML.id = placesIveBeen.location[2].location;
  place2HTML.firstChild.innerText = placesIveBeen.location[1].location;
  place2HTML.id = placesIveBeen.location[1].location;
  document.getElementById(placesIveBeen.location[1].location).addEventListener('click', location1Func);
  document.getElementById(placesIveBeen.location[2].location).addEventListener('click', location2Func);
  stopChecking();
 }

function location1Func(){
  let placesIveBeen = new PlacesIveBeen;
  let destination1 = new Destination('Seattle', ['Space Needle'], 'Summer', ['vacation']);
  placesIveBeen.addDestination(destination1);
  let destinationElement = document.getElementById('Seattle');
  delete(placesIveBeen.location[1].id);
  delete(placesIveBeen.location[1].location);
  const ul = document.createElement('ul');
  for(const [key, value] of Object.entries(destination1)) {
    let liElement = document.createElement('li');
    liElement.innerText = (`${key}: ${value}`);
    ul.append(liElement);
  }
  destinationElement.append(ul);
  stop2();
}

function location2Func(){
  let placesIveBeen = new PlacesIveBeen;
  let destination2 = new Destination('NYC', ['Empire State Building'], 'Spring', ['good food']);
  placesIveBeen.addDestination(destination2);
  let destinationElement = document.getElementById('NYC');
  delete(placesIveBeen.location[1].id);
  delete(placesIveBeen.location[1].location);
  const ul = document.createElement('ul');
  for(const [key, value] of Object.entries(destination2)) {
    let liElement = document.createElement('li');
    liElement.innerText = (`${key}: ${value}`);
    ul.append(liElement);
  }
  destinationElement.append(ul);
  stop1()
}

function stopChecking(){
  document.getElementById("check").removeEventListener("click", displayThings );
}

function stop2(){
  document.getElementById("Seattle").removeEventListener("click", location1Func );
}

function stop1(){
  document.getElementById("NYC").removeEventListener("click", location2Func );
}

window.addEventListener('load', function() {
  document.getElementById("check").addEventListener("click", displayThings);
  
});
