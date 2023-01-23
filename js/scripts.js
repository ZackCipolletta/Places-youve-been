function PlacesIveBeen() {
  this.places = {};
}

PlacesIveBeen.prototype.addDestination = function(destination){
  this.places[destination.location] = destination;
}

function Destination(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this. landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}