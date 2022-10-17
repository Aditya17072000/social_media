import { Bookmark, Chat, Event, Group, Help, PlayCircle, RssFeed, School, Work, } from '@mui/icons-material'
import './leftbar.css'

export default function Leftbar() {
  return (
    <div className='leftbar'>
      <div className="leftbarwrap">
        <ul className="leftbarlist">
          <li className="leftbarlistitem">
            <RssFeed className='leftbaricon'/>
            <span className="leftbaritemname">Feed</span>
          </li>
          <li className="leftbarlistitem">
            <Chat className='leftbaricon'/>
            <span className="leftbaritemname">Chat</span>
          </li>
          <li className="leftbarlistitem">
            <PlayCircle className='leftbaricon'/>
            <span className="leftbaritemname">Videos</span>
          </li>
          <li className="leftbarlistitem">
            <Group className='leftbaricon'/>
            <span className="leftbaritemname">Groups</span>
          </li>
          <li className="leftbarlistitem">
            <Bookmark className='leftbaricon'/>
            <span className="leftbaritemname">Bookmark</span>
          </li>
          <li className="leftbarlistitem">
            <Help className='leftbaricon'/>
            <span className="leftbaritemname">Question</span>
          </li>
          <li className="leftbarlistitem">
            <Work className='leftbaricon'/>
            <span className="leftbaritemname">Job</span>
          </li>
          <li className="leftbarlistitem">
            <Event className='leftbaricon'/>
            <span className="leftbaritemname">Event</span>
          </li>
          <li className="leftbarlistitem">
            <School className='leftbaricon'/>
            <span className="leftbaritemname">Course</span>
          </li>
        </ul>
        <button className="leftbarbutton">Show more</button>
        <hr className='leftbarhr'/>
        <ul className="leftbarfriendlist">
          <li className="leftbarfriend">
            <img src="/assets/2.jpg" alt="" className="leftbarfriendimg" />
            <span className="leftbarname">Bruce Banner</span>
          </li>
          <li className="leftbarfriend">
            <img src="/assets/2.jpg" alt="" className="leftbarfriendimg" />
            <span className="leftbarname">Bruce Banner</span>
          </li>
          <li className="leftbarfriend">
            <img src="/assets/2.jpg" alt="" className="leftbarfriendimg" />
            <span className="leftbarname">Bruce Banner</span>
          </li>
          <li className="leftbarfriend">
            <img src="/assets/2.jpg" alt="" className="leftbarfriendimg" />
            <span className="leftbarname">Bruce Banner</span>
          </li>
          <li className="leftbarfriend">
            <img src="/assets/2.jpg" alt="" className="leftbarfriendimg" />
            <span className="leftbarname">Bruce Banner</span>
          </li>
          <li className="leftbarfriend">
            <img src="/assets/2.jpg" alt="" className="leftbarfriendimg" />
            <span className="leftbarname">Bruce Banner</span>
          </li>
          <li className="leftbarfriend">
            <img src="/assets/2.jpg" alt="" className="leftbarfriendimg" />
            <span className="leftbarname">Bruce Banner</span>
          </li>
          <li className="leftbarfriend">
            <img src="/assets/2.jpg" alt="" className="leftbarfriendimg" />
            <span className="leftbarname">Bruce Banner</span>
          </li>
          <li className="leftbarfriend">
            <img src="/assets/2.jpg" alt="" className="leftbarfriendimg" />
            <span className="leftbarname">Bruce Banner</span>
          </li>
          
        </ul>
      </div>
    </div>
  )
}
