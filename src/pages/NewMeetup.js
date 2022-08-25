import { useHistory } from 'react-router-dom';

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const history = useHistory();

    //prepare for http request
    function addMeetupHandler(meetupData){
        fetch(
            'https://learn-react-76901-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
            {
                //post request
                method: 'POST', 
                body: JSON.stringify(meetupData), 
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
        });
    }

    return (
        <section>
            <h1>Add new meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </section>
    );
    
}

export default NewMeetupPage;