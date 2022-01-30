import {useState} from 'react'
import './Post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import {Users} from '../dummyData/DummyData'
function Post({ post}) {

 


    const [like , setLike] = useState (post.likes);
    
    const [isLiked, setIsLiked] = useState (false)

    const likeHandler =() =>{
        setLike (isLiked ? like-1 : like+1)
        setIsLiked (!isLiked)
    }

    return (
        <div className='post'>
            <div className="post__wrapper">
                <div className="post__wrapper__top">
                    <div className="post__top_left">
                        <img src={Users.filter(u=>u.id===post.id)[0].profilePicture} alt="" className="post__profile__img" />
                        <span className='post__username'> {Users.filter(u=>u.id===post.userId)[0]?.username || "Not Found"}</span>
                        <span className='post__info'> {post.date}</span>
                    </div>

                    <div className="post__top__right">
                        <MoreVertIcon />
                    </div>
                </div>

                <div className="post__wrapper__center">
                    <span className="post__text">
                       {post.description}
                    </span>

                    <img src={post.photo} alt="" className="post__img" />
                </div>

                <div className="post__wrapper__bottom">
                        <div className="post__bottom__left">
                            <FavoriteIcon htmlColor='red' classname='post__icon' onClick={likeHandler}/>
                            <ThumbUpIcon htmlColor='lightblue'  classname='post__icon' onClick={likeHandler}/>
                            <span className='post__like__counter'>{like} likes</span>
                        </div>

                        <div className="post__bottom__right">
                            <span className='post__like__counter'> {post.comments} comments</span>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Post
