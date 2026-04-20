import React from 'react'
import './Home.css'
import hero_title from '../../assets/hero_title.png'
import hero_banner from '../../assets/hero_banner.jpg'
import TitleCards from '../../components/TitleCards/TitleCards'

const Home = () => {
  return (
    <div className="home">
      <div className="hero" style={{ backgroundImage: `url(${hero_banner})` }}>
        <img src={hero_title} alt="title" className="hero-title" />
        <p className="hero-desc">
          A vengeful fairy tale about hard choices and evil people.
        </p>
        <div className="hero-btns">
          <button className="btn play-btn">▶ Play</button>
          <button className="btn info-btn">ⓘ More Info</button>
        </div>
      </div>

    <div className="more-cards">
  <TitleCards title="Blockbuster Movies" category="blockbuster" />
  <TitleCards title="Only on Netflix" category="netflix" />
  <TitleCards title="Upcoming" category="upcoming" />
</div>
    </div>
  )
}

export default Home