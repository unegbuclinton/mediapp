import './Home.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/sidebar/SIdebar'
import Feeds from '../../components/feeds/Feeds'
import Rightbar from '../../components/rightbar/Rightbar'

function Home() {
    return (
        <>
           <Topbar /> 
           <div className="home__container">
               <Sidebar />
               <Feeds />
               <Rightbar />
           </div>
        </>
    )
}

export default Home
