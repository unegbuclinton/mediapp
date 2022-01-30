import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/SIdebar'
import Feeds from '../../components/feeds/Feeds'
import Rightbar from '../../components/rightbar/Rightbar'
import coding from '../../assets/cool.jpg'
import me from '../../assets/me.jpg'
import './Profile.css'

function Profile() {
    return (
        <>
           <Topbar /> 
           <div className="profile">
               <Sidebar />

               <div className="profile__right">

                   <div className="profile__right__top">
                        <div className="profile__cover">
                            <img src={coding} alt='' className="profile__coverphoto" />
                            <img src={me} alt='' className="profile__profilephoto" />
                        </div>
                        <div className="profile__info">
                            <h4 className='profile__info__name'> Unegbu Clinton</h4>
                           <span className='profile__info__description'>Hello React World</span>
                        </div>
                   </div>
                   <div className="profile__right__bottom">
                        <Feeds />
                        <Rightbar  profile/>
                   </div>
                   
               </div>
               
           </div>
        </>
    )
}

export default Profile
