import "./Topbar.css"
import { Message, Person, Search, Notifications } from "@mui/icons-material"

export default function Topbar() {
  return (
    <div className="topbarcontainer">
      <div className="topbarleft">
        <span className="logo">BeSocial</span>
      </div>
      <div className="topbarcenter">
        <div className="searchbar">
          <Search className="searchIcon"/>
          <input placeholder="Search for friends, post or video" className="searchinput" />

        </div>
      </div>
      <div className="topbarright">
        <div className="topbarlinks">
          <span className="topbarlink">Homepage</span>
          <span className="topbarlink">Timeline</span>
        </div>
        <div className="topbaricons">
          <div className="topbariconitems">
            <Person/>
            <span className="topbarbadge">1</span>
          </div>
          <div className="topbariconitems">
            <Message/>
            <span className="topbarbadge">2</span>
          </div>
          <div className="topbariconitems">
            <Notifications/>
            <span className="topbarbadge">1</span>
          </div>
        </div>
        <img src="/assets/1.jpg" alt="" className="topbarimg" />
      </div>
    </div>
  )
}
