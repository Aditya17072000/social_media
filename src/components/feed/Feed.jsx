import Post from '../post/Post'
import Share from '../share/Share'
import './feed.css'
import {Posts} from '../../dummyData' 
export default function Feed() {
  return (
    <div className='feed'>
      <div className="feedwrap">
      <Share/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      <Post/>
      </div>  
    </div>
  )
}
