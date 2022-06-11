import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";

const NewMeetup = () => {
  const router = useRouter();

  const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
    router.push("/");
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
};

export default NewMeetup;
