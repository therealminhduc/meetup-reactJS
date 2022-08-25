//Link component prevents to use <a href=''>. a tag requires a changement of pages that dont match with the purpose of routing
import {Link} from 'react-router-dom';

//styling by css module. Instead of using a string className, we use a dynamic value.
import classes from './MainNavigation.module.css';

function MainNavigation(){
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>Add new meetup</Link>
                    </li>
                    <li>
                        <Link to='/favorites'>My favorites</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
        
}

export default MainNavigation;