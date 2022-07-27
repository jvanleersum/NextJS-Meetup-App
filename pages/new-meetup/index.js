import { useRouter } from "next/router";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetuphandler = async (enteredMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    console.log(data);

    if (data.message === 'Meetup inserted') {
      router.replace('/');
    }
  };

  return <NewMeetupForm onAddMeetup={addMeetuphandler} />;
};

export default NewMeetupPage;
