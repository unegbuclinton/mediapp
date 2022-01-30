import klinton from '../../assets/klinton.JPG'
import './Share.css'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';



function share() {
    return (
        <div className='share'>
            <div className="share__wrapper">
                <div className="share__top">
                    <img src={klinton} alt="" className="share__profile__img" />
                    <input placeholder="what's in your mind Clinton  ?" className="share__input" />
                </div>
                <hr className="sharehr" />

                <div className="share__bottom">
                    <div className="share__options">
                        <div className="share__option">
                            <PermMediaIcon htmlColor='tomato' className='share__option__icon'/>
                            <span>Photo/Video</span>
                        </div>
                        
                        <div className="share__option">
                            <LabelIcon htmlColor='blue'  className='share__option__icon'/>
                            <span> Tag</span>
                        </div>

                        <div className="share__option">
                            <LocationOnIcon htmlColor='green'  className='share__option__icon'/>
                            <span> Location</span>
                        </div>

                        <div className="share__option">
                            <EmojiEmotionsIcon htmlColor='gold'  className='share__option__icon'/>
                            <span>Emoji</span>
                        </div>
                    </div>
                    <button className='share__button'> Share</button>
                </div>
            </div>
        </div>
    )
}

export default share
