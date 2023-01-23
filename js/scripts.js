function PlacesIveBeen() {
  this.location = {};
}

PlacesIveBeen.prototype.addDestination = function(destination){
  this.location[destination.location] = destination;
}

function Destination(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}