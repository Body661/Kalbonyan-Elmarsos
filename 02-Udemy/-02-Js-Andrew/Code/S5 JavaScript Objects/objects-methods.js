let restaurant = {
  name: "MM",
  capacity: 75,
  guestCount: 0,
  checkAvailability: function (size) {
    let seatsLeft = this.capacity - this.guestCount;
    return size <= seatsLeft;
  },
  getIn: function (size) {
    this.guestCount = this.guestCount + size;
  },
  leave: function (size) {
    this.guestCount = this.guestCount - size;
  },
};

restaurant.getIn(72);
console.log(restaurant.checkAvailability(4));
restaurant.leave(5);
console.log(restaurant.checkAvailability(4));
