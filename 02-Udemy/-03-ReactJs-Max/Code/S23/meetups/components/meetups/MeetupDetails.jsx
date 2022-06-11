import React from "react";
import { useRouter } from "next/router";
import classes from "./MeetupDetails.module.css";

const MeetupDetails = ({ meetups }) => {
  const router = useRouter();
  const meetup = meetups.find((meetup) => meetup.id === router.query.meetupId);

  return (
    <section className={classes.detail}>
      <img src={meetup.image} alt="" />
      <h1>{meetup.title}</h1>
      <address>{meetup.address}</address>
      <p>{meetup.description}</p>
    </section>
  );
};

export default MeetupDetails;
