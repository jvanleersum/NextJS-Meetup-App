import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetailsPage = () => {
  return (
    <MeetupDetail
      title="Meetup in Amsterdam"
      image="https://images.unsplash.com/photo-1612911854559-2123745ab97c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
      address="Amsterdamsestraat 1, 1000AA, Amsterdam"
      description="This is the first meetup"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1', 
        }
      },
      {
        params: {
          meetupId: 'm2'
        }
      }
    ]
  }
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId

  //fetch data for single meetup
  return {
    props: {
      meetupData: {
        title: "Meetup in Amsterdam",
        image:
          "https://images.unsplash.com/photo-1612911854559-2123745ab97c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        address: "Amsterdamsestraat 1, 1000AA, Amsterdam",
        description: "This is the first meetup",
      },
    },
  };
}

export default MeetupDetailsPage;
