const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = [];
  this.journeys.forEach(function(journey) {
    startLocations.push(journey.startLocation);
  });
  return startLocations;

};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = [];
  this.journeys.forEach(function(journey) {
    endLocations.push(journey.endLocation);
  });
  return endLocations;

};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter(journey => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance > minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((accumulator, journey)=> {
    return accumulator + journey.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  var uniqueModes = Array.from(new Set(this.journeys.transport))
  return uniqueModes;
};

module.exports = Traveller;
