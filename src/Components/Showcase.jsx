import ShowcaseVideo from "../assets/showcase-video.mp4"

const Showcase = () => {
  return (
    <div className="showcase__container">
        <video
        className='showcase__video'
        src={ShowcaseVideo}
        autoPlay
        muted
        loop
        playsInline
        />
    </div>
  )
}

export default Showcase