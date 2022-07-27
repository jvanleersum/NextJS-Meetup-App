import { MongoClient } from "mongodb";
import MeetupItem from "../components/meetups/MeetupItem";
import MeetUpList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Meetup in Amsterdam",
    image:
      "https://images.unsplash.com/photo-1612911854559-2123745ab97c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    address: "Amsterdamsestraat 1, 1000AA, Amsterdam",
    description: "This is the first meetup",
  },
  {
    id: "m2",
    title: "Meetup again",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Amsterdamsestraat 1, 1000AA, Amsterdam",
    description: "This is the second meetup",
  },
];

const HomePage = (props) => {
  return <MeetUpList meetups={props.meetups} />;
};

export async function getStaticProps() {
  // fetch data from an API
  const client = await MongoClient.connect(
    "mongodb+srv://development:development@cluster0.h9yhx.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;
