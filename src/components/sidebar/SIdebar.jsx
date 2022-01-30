import './Sidebar.css'
import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import GroupIcon from '@mui/icons-material/Group';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import WorkIcon from '@mui/icons-material/Work';
import EventIcon from '@mui/icons-material/Event';
import SchoolIcon from '@mui/icons-material/School';
import burger from '../../assets/burger.jpg'
import urch from '../../assets/urch.jpg'
import jachi from '../../assets/jachi.JPG'
import chisom from '../../assets/chisom.jpg'
import babalu from '../../assets/babalu.jpg'
import nedu from '../../assets/nedu.jpg'
import daniel from '../../assets/daniel.JPG'



function SIdebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__wrapper">
                <ul className="sidebar__list">
                    <li className="sidebar__listitem">
                        <RssFeedIcon className='sidebar__icon'/>
                        <span className='sidebar__listitem__text'> Feeds </span>
                    </li>
                    <li className="sidebar__listitem">
                        <ChatIcon className='sidebar__icon'/>
                        <span className='sidebar__listitem__text'> Chat </span>
                    </li>
                    <li className="sidebar__listitem">
                        <VideoLibraryIcon className='sidebar__icon'/>
                        <span className='sidebar__listitem__text'> Video </span>
                    </li>
                    <li className="sidebar__listitem">
                        <GroupIcon className='sidebar__icon'/>
                        <span className='sidebar__listitem__text'> Groups </span>
                    </li>
                    <li className="sidebar__listitem">
                        <BookmarkIcon className='sidebar__icon'/>
                        <span className='sidebar__listitem__text'> Bookmark </span>
                    </li>
                    <li className="sidebar__listitem">
                        <QuestionAnswerIcon className='sidebar__icon'/>
                        <span className='sidebar__listitem__text'> Question </span>
                    </li>
                    <li className="sidebar__listitem">
                        <WorkIcon className='sidebar__icon'/>
                        <span className='sidebar__listitem__text'> Jobs </span>
                    </li>
                    <li className="sidebar__listitem">
                        <EventIcon className='sidebar__icon'/>
                        <span className='sidebar__listitem__text'> Events </span>
                    </li>
                    <li className="sidebar__listitem">
                        <SchoolIcon className='sidebar__icon'/>
                        <span className='sidebar__listitem__text'> Courses </span>
                    </li>
                    
                </ul>

                <button className='sidebar__button'> Show More</button>
                <hr className='sidebarhr'/>
                <ul className='sidebar__list__item'>
                    <li className="sidebar__friend__list">
                        <img src={burger} alt="" className="sidebar__friend__img" />
                        <span className="sidebar__friend__name"> Agbasi Samuel</span>
                    </li>
                    <li className="sidebar__friend__list">
                        <img src={daniel} alt="" className="sidebar__friend__img" />
                        <span className="sidebar__friend__name"> Anayo Israel</span>
                    </li>
                    <li className="sidebar__friend__list">
                        <img src={nedu} alt="" className="sidebar__friend__img" />
                        <span className="sidebar__friend__name"> Iwuchukwu Paul</span>
                    </li>
                    <li className="sidebar__friend__list">
                        <img src={jachi} alt="" className="sidebar__friend__img" />
                        <span className="sidebar__friend__name"> Aniekwe Jachimma</span>
                    </li>
                    <li className="sidebar__friend__list">
                        <img src={babalu} alt="" className="sidebar__friend__img" />
                        <span className="sidebar__friend__name"> Unegbu Lucius</span>
                    </li>
                    <li className="sidebar__friend__list">
                        <img src={chisom} alt="" className="sidebar__friend__img" />
                        <span className="sidebar__friend__name"> Unegbu Julie</span>
                    </li>
                    <li className="sidebar__friend__list">
                        <img src={urch} alt="" className="sidebar__friend__img" />
                        <span className="sidebar__friend__name"> Unegbu Kingsley</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SIdebar
