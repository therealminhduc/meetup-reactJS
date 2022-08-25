import classes from './Card.module.css';

function Card (props) {
    //props.children stores values that are wrapped. In this case, values which are wrapped situated in MeetupItem.
    return <div className={classes.card}>{props.children}</div>
}

export default Card;