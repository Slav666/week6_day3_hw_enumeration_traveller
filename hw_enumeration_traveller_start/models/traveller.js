const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
 const journeyStart = this.journeys.map(journey => journey.startLocation);
  return journeyStart;

};

Traveller.prototype.getJourneyEndLocations = function () {
const journeyStop = this.journeys.map(journey => journey.endLocation);
return journeyStop;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
return this.journeys.filter((journey) => {
  return journey.transport == transport;
});
};
// Cinema.prototype.filmsByGenre = function (genre) {
//   return this.films.filter((film) => {
//     return film.genre === genre;
//   });
// };
Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance > minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {

    return this.journeys.reduce((total, journey) => {
        return total + journey.distance;
      }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
