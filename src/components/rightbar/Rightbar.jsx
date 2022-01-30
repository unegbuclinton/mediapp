import './Rightbar.css'
import gift from '../../assets/gift.png'
import ad from '../../assets/ad.jpg'
import chisom from '../../assets/chisom.jpg'
import OnlineFriends from '../onlinefriends/OnlineFriends'
import {Users} from '../dummyData/DummyData'

function Rightbar({profile}) {

    const HomeRightBar = ()=>{
        return (
            <>
                  <div className="birthday__container">
                    <img src={gift} alt='' className='birthday__img'/>
                    <span className='birthday__text'>
                        <b>Unegbu Kingsley </b> and <b>2 others are</b> having birthday today</span>
                </div>

                <img src={ad} alt="" className="rightbar__ad" />

                <h4 className='rightbar__title'> Online Friends</h4>

               {Users.map(u=>
                    <OnlineFriends key={u.id}  user={u}/>
                )} 
            </>
        )
    }

    const ProfileRightbar = () =>{
        return(
            <>
                <h4 className='rightbarTitle'> User Information </h4>
                <div className="rightbar__info">
                    <div className="rightbar__info__item">
                        <span className="right__info__key">City:</span>
                        <span className="right__info__value">Lagos State</span>
                    </div>
                    <div className="rightbar__info__item">
                        <span className="right__info__key">From:</span>
                        <span className="right__info__value"> Nigeria</span>
                    </div>
                    <div className="rightbar__info__item">
                        <span className="right__info__key">Relationship:</span>
                        <span className="right__info__value"> Engaged</span>
                    </div>
                </div>

                <h4> User Friends </h4>
                <div className="rightbar__followings">
                    <div className="rightbar__following">
                        <img src={chisom} alt="" className="following__img" />
                        <span className="following__username"> Unegbu Julie</span>
                    </div>

                    <div className="rightbar__following">
                        <img src={chisom} alt="" className="following__img" />
                        <span className="following__username"> Unegbu Julie</span>
                    </div>

                    <div className="rightbar__following">
                        <img src={chisom} alt="" className="following__img" />
                        <span className="following__username"> Unegbu Julie</span>
                    </div>

                    <div className="rightbar__following">
                        <img src={chisom} alt="" className="following__img" />
                        <span className="following__username"> Unegbu Julie</span>
                    </div>

                    <div className="rightbar__following">
                        <img src={chisom} alt="" className="following__img" />
                        <span className="following__username"> Unegbu Julie</span>
                    </div>

                    <div className="rightbar__following">
                        <img src={chisom} alt="" className="following__img" />
                        <span className="following__username"> Unegbu Julie</span>
                    </div>
                </div>
                
            </>
        )
    }
    return (
        <div className='rightbar'>
            <div className="rightbar__wrapper">
              {profile ? <ProfileRightbar /> : <HomeRightBar /> }
}
            </div>            
        </div>
    )
}

export default Rightbar
