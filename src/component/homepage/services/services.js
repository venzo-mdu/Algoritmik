import React from 'react'
import '../services/services.css'

import Arrowimage from '../../../images/homepage/algohome30.png'
function services() {
  return (
   <>
   <div className='algoservices'>
    <p id='servicesText'>Other Services</p>
    <div className='servicesCard'>
        <div className='card'>
          <div className='textCards'>
            <p id='cardText'>Deep Cyber Investigations</p>
            <img className='arrowImg' src={Arrowimage} alt='arrowImage'></img>
          </div>
          <p id='belowcardText'>Most businesses and organizations don’t have the tools or time to keep up with escalating and increasingly sophisticated threats to their physical and digital assets.</p>
        </div>
        <div className='card'>
        <div className='textCards'>
            <p id='cardText'>Pentesting</p>
            <img className='arrowImg' src={Arrowimage} alt='arrowImage'></img>
          </div>
          <p id='belowcardText'>To protect your organization, you first need to know what assets and digital surface to protect</p>
        </div>
        <div className='card'>
        <div className='textCards'>
            <p id='cardText'>Phishing Detection</p>
            <img className='arrowImg' src={Arrowimage} alt='arrowImage'></img>
          </div>
          <p id='belowcardText'>To protect your organization, you first need to know what assets and digital surface to protect</p>
        </div>
        <div className='card'>
        <div className='textCards'>
            <p id='cardText'>Ransomeware</p>
            <img className='arrowImg' src={Arrowimage} alt='arrowImage'></img>
          </div>
          <p id='belowcardText'>To protect your organization, you first need to know what assets and digital surface to protect</p>
        </div>
    </div>
   </div>
   </>
  )
}

export default services