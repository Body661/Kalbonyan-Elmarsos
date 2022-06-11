import React from "react";
import MeetupDetails from "../../components/meetups/MeetupDetails";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    image: "https://thumbs.dreamstime.com/b/meaw-meaw-11714189.jpg",
    title: "New meet",
    address: "home",
    description: "meeeaaaw",
  },
  {
    id: "m2",
    image: "https://thumbs.dreamstime.com/b/meaw-meaw-11714189.jpg",
    title: "New meet 22",
    address: "meaw",
    description: "meeeaaaw meeeaaaw",
  },
];
const MeetDetails = () => {
  return <MeetupDetails meetups={DUMMY_MEETUPS} />;
};

export default MeetDetails;
