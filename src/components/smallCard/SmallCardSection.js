import React, { useRef } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { sideScroll } from '../../utils/Scroll'
import Card from './Card';
import "./SmallCard.css"
const arr=[
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCFMkRGErD4TGWfqe_AwlF50TA5UQSfIIGMw&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzwgZh6p-AmV0LfflVp3mkwvB-U0-JKtb_3g&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT46uY0ZPSX8ZvHJNB4LcIB65wtsDlTYBCKNw&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsuxgs98pkbqClPbEo0Qbmod0OxkCnsw7bQA&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0AihB_ozCPnW3ngcJFUDKPglmEtMOZ74aWA&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbH_GBbZ8vs1atutpCC7dESodEm3v10l9M9g&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBBegcLD6Lt8Esz03CsiLMKyHujHWY4yLcmQ&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRdslm7m-2f850sv9IGHqpfSJ5GBvzzhp5SQ&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDbetMHluzm0fIw1J4HZEK0VPbJWn8Apu-Rg&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4gy57ugYdEcJg58r--_BHOMc_8XgtjTL1w&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_XUpnVcoZXYdqbLWQq__zSuVMs1_pqoUNrQ&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnxKaOe7B7PK_7hdJvklHQftZtiDsUBpBdqQ&usqp=CAU",]
const SmallCardSection = () => {
    const contentWrapper = useRef(null);
  return (
    <section className='small-card-section'>
    <div className='top-container'>
    <h2 >Plan a trip with help from local Hosts around the world</h2>
    <div className='top-left'>
      <p className='show-link'>Show(9)</p>
      <button className="arrow-btn" onClick={() => {sideScroll(contentWrapper.current, 2, 800, -10)}}><IoIosArrowBack /></button>
      <button className="arrow-btn" onClick={() => {sideScroll(contentWrapper.current, 2, 800, 10)}}><IoIosArrowForward /></button>
    </div>
    </div>
    <div ref={contentWrapper} className='small-card-container'>
    {arr.map((each,i)=><Card data={each} key={i}/>)}
    <div className='img-container empty-container'>
    <div className='show-all'><p>Show All</p> <IoIosArrowForward /></div>
    </div>
    </div>
    </section>
  )
}

export default SmallCardSection