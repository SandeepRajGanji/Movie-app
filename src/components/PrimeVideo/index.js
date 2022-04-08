// Write your code here

import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  return (
    <div className="app-container">
      <div className="responsive-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-image"
        />
        <div className="slider-container">
          <MoviesSlider moviesList={moviesList} />
        </div>
      </div>
    </div>
  )
}
export default PrimeVideo
