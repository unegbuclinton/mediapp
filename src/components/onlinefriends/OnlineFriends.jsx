import './OnlineFriends.css'


function OnlineFriends({user}) {


    return (
        <ul className="rightbar__friends__list">
                    <li className="rightbar__friend">
                        <div className="profile__img__container">
                            <img src={user.profilePicture} alt="" className="rightbar__profile__img" />
                            <span className="rightbar__online"></span>
                        </div>
                        <span className='rightbar__profile__username'>{user.username}</span>
                    </li>

                </ul>
    )
}

export default OnlineFriends
