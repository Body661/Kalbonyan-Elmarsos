const data = {
  locations: [],
  get location() {
    return this._location;
  },
  set location(newCity) {
    this._location = newCity.trim();
    this.locations.push(this._location);
  },
};

data.location = "   Cairo    ";
data.location = "Dubai";
console.log(data.locations);
