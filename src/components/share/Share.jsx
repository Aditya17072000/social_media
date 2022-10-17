import { EmojiEmotions, LocalOffer, PermMedia, Room } from '@mui/icons-material'
import './share.css'

export default function Share() {
  return (
    <div className='share'>
        <div className="sharewrap">
        <div className="sharetop">
        <img src="/assets/1.jpg" className="shareprofileimg" />
            <input placeholder="What's in your mind" className="shareinput" />
        </div>
        <hr className="sharehr" />
        <div className="sharebottom">
            <div className="shareoptions">
                <div className="shareoption">
                    <PermMedia htmlColor='tomato' className='shareicon'/>
                    <div className="shareoptiontext">Photos and Videos</div>
                </div>
                <div className="shareoption">
                <LocalOffer htmlColor='blue' className='shareicon'/>
                    <div className="shareoptiontext">Tag</div>
                </div>
                <div className="shareoption">
                <Room htmlColor='green' className='shareicon'/>
                    <div className="shareoptiontext">Location</div>
                </div>
                <div className="shareoption">
                <EmojiEmotions htmlColor='goldenrod' className='shareicon'/>
                    <div className="shareoptiontext">Reaction</div>
                </div>
            </div>
            <button className="sharebutton">Share</button>
        </div>
        
        </div>
           
    </div>
  )
}
