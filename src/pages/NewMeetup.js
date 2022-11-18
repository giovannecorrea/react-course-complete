import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  const navigate = useNavigate();

  function AddMeetupHandler(meetupData) {
    fetch(
      "https://react-getting-started-4782e-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate('/');
    });
  }

  return (
    <section>
      <h1>New Meetups Page</h1>
      <NewMeetupForm onAddMeetup={AddMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
