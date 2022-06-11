import MeetupList from "../components/meetups/MeetupList";

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

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}

export default HomePage;
