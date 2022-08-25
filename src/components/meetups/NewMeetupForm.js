import Card from "../ui/Card";
import classes from './NewMeetupForm.module.css';
import { useRef } from 'react';
 
function NewMeetupForm (props) {

    /*  
        the default behavior of the browser : send a request to a server automatically but we dont want that
        instead we want to prevent that and run our own JS logic
        logic : still send http request but behind the scences -> prevent the page reloading
    */

    //method of reference (which is included in react library)-> pick what user entered. In this case, it's the title in line 43
    //can use multiple ref
    const titleInputRef = useRef(); 
    const imageInputRef = useRef(); 
    const addressInputRef = useRef(); 
    const descriptionInputRef = useRef(); 


    function submitHandler (event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title : enteredTitle, 
            image : enteredImage,
            address : enteredAddress,
            description : enteredDescription,
        };

        //prepare for http request
        props.onAddMeetup(meetupData);
    }

    return (
        <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type='text' required id='title' ref={titleInputRef}/>
                </div>

                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type='url' required id='image' ref={imageInputRef} />
                </div>
                
                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type='text' required id='address' ref={addressInputRef} />
                </div> 

                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" required rows="5" ref={descriptionInputRef}></textarea>
                </div>

                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div> 
            </form>
        </Card>
    );
}

export default NewMeetupForm;


