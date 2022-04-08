// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl} = movieDetails
  return (
    <Popup
      modal
      trigger={
        <button type="button" className="button">
          <img src={thumbnailUrl} alt="thumbnail" className="image" />
        </button>
      }
    >
      {close => (
        <div className="modal-container">
          <button
            type="button"
            className="trigger-button"
            testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose />
          </button>
          <div className="video-player">
            <ReactPlayer url={videoUrl} />
          </div>
        </div>
      )}
    </Popup>
  )
}
export default MovieItem
