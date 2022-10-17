import { MoreVert } from '@mui/icons-material'
import './post.css'

export default function Post() {
  return (
    <div className='post'>
        <div className="postwrap">
            <div className="posttop">
                <div className="posttopleft">
                    <img src="/assets/1.jpg" alt="" className="postprofileimg" />
                    <span className="postusername">Aditya Singh</span>
                    <span className="posttime">5 min ago</span>
                    
                </div>
                <div className="posttopright">
                    <MoreVert/>
                </div>
            </div>
            <div className="postmiddle">
                <span className="postcentertext">Hello, I am back...</span>
                <img src="/assets/3.jpg" alt="" className="postcenterimg" />
            </div>
            <div className="postbottom">
                <div className="postbottomleft">
                    <img src="/assets/like.jpg" alt="" className="postreact" />
                    <img src="/assets/heart.jpg" alt="" className="postreact" />
                    <span className="postlikecount">101 people like it</span>
                </div>
                <div className="postbottomright">
                    <span className="postcomment">11 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
