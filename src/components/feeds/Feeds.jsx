import Post from '../post/Post'
import Share from '../share/Share'
import './Feeds.css'
import {Posts} from '../dummyData/DummyData'

function Feeds() {
    return (
        <div className='feeds'>
            <div className="feeds__wrapper">
                <Share />
              {Posts.map(p =>                  
                  <Post key ={p.id} post={p} />
              )}
               
               
            </div>
        </div>
    )
}

export default Feeds
