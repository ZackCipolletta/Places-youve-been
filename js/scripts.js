function Places() {
  this.destinations = {};
}

Places.prototype.addDestination = function(destination){
  this.destination[destination.location] = destination;
}

function Destination(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this. landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}