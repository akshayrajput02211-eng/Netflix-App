import React from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'

const TitleCards = ({title, category}) => {
  
  const filterData = () => {
    if(category === "blockbuster") return cards_data.slice(0, 5)
    if(category === "netflix") return cards_data.slice(5, 10)
    if(category === "upcoming") return cards_data.slice(10, 14)
    return cards_data
  }

  return (
    <div className='title-cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list">
        {filterData().map((card, index) => (
          <div key={index} className="card">
            <img src={card.image} alt={card.name} />
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TitleCards