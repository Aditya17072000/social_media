import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import './style.css'
export default function Home() {
  return (
    <div>
      <Topbar/> 
      <div className="homecontainer">
         <Leftbar/>
         <Feed/>
         <Rightbar/>
       </div>
    
      </div>
  )
}
