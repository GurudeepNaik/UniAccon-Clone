import faker from 'faker'
import React from 'react'
import { FiHeart } from 'react-icons/fi'
import { FaStar } from 'react-icons/fa'

const Card = (props) => {
    const img=props.data
  return (
    <div className='small-card'>
    <div className='img-container'><img className='small-card-img' src={img} alt="profile"/><FiHeart size={"4x"} color='aliceblue' className='card-heart'/></div>
    <div className='row1-inline'><p><FaStar/>{(Math.random()+4).toFixed(2)}({Math.round(Math.random()*10000)}).{faker.address.country()}</p></div>
    <h3 className='small-card-heading'>{faker.lorem.words(4)}</h3>
    <div className='rate'><strong>From ${faker.finance.amount()}</strong>/person</div>
    </div>
  )
}

export default Card