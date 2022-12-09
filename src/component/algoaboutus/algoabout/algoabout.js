import React from 'react'
import '../algoabout/algoabout.css'

import Triangleicon from '../../../images/aboutus/aboutus9.svg'
import Cardicon1 from '../../../images/aboutus/aboutus3.svg'
import Cardicon2 from '../../../images/aboutus/aboutus4.svg'
import Cardicon3 from '../../../images/aboutus/aboutus5.svg'
import Cardicon4 from '../../../images/aboutus/aboutus6.svg'

import Aboutlogo from '../../../images/aboutus/aboutus7.png'

// function algoabout() {
//   return (
//     <>
//       <div className='algoabout'>
//         <div className='borderRight'>

//           <p id='aboutfirstText'>Most businesses and organizations don’t have the tools or time to keep up with escalating and increasingly sophisticated threats to their physical and digital assets. With Algoritmik’s Deep Dive Investigations,.</p>
//           <div className='flexabout'>
//             <p id='aboutfirstTitle'>World-Class Security Operating Centres</p>
//             <div className='innerflex'>
//               <p id='traingleTitle1'><img className='triangleIcon' alt='traingleicon' src={Triangleicon}></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About us</p>
//               <p id='triangleText1'>A cybersecurity company that protects both public and private sector from the hostile cyber environment</p>
//             </div>
//           </div>
//           <p id='aboutsecondText'>Most businesses and organizations don’t have the tools or time to keep up with escalating and increasingly sophisticated threats to their physical and digital assets. With Algoritmik’s Deep Dive Investigations, you can assess and respond to these threats with the help of our highly skilled analysts to build cybersecurity analysis, threat assessments, analytic projects and deep-dive reports, all customized to your needs</p>
//           <p id='aboutsecondText'>Most businesses and organizations don’t have the tools or time to keep up with escalating and increasingly sophisticated threats to their physical and digital assets. With Algoritmik’s Deep Dive Investigation.</p>
//           <p id='whoTitle'>Who we are?</p>
//           <div className='whoweare'>
//             <div className='aboutsection1'>
//               <div className='firstCard'>
//                 <img className='whoweareIcon' src={Cardicon2} alt='icon'></img>
//                 <p id='firstNumber'>200+</p>
//                 <p id='firstText'>Professionals</p>
//               </div>
//               <div className='secondCard'>
//                 <img className='whoweareIcon' src={Cardicon4} alt='icon'></img>
//                 <p id='firstNumber'>5000+</p>
//                 <p id='firstText'>Testings & Attacks</p>
//               </div>
//             </div>
//             <div className='aboutsection2'>
//               <img className='algoaboutlogoIcon' src={Aboutlogo} alt='logo'></img>
//             </div>
//             <div className='aboutsection3'>
//               <div className='thirdCard'>
//                 <img className='whoweareIcon' src={Cardicon1} alt='icon'></img>
//                 <p id='firstNumber'>100+</p>
//                 <p id='firstText'>Clients & Customers</p>
//               </div>
//               <div className='fourthCard'>
//                 <img className='whoweareIcon' src={Cardicon3} alt='icon'></img>
//                 <p id='firstNumber'>50+</p>
//                 <p id='firstText'>World countries</p>
//               </div>
//             </div>
//           </div>
//           <div className='flexabout1'>
//             <p id='aboutfirstTitle'>Proud that we have our own <span id='greenText'>Phishing Beacon</span></p>
//             <div className='innerflex1'>
//               <p id='traingleTitle1'><img className='triangleIcon' alt='traingleicon' src={Triangleicon}></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Lets work with a cup of coffee</p>
//               <p id='triangleText2'>We are a small team with professional players.</p>
//             </div>
//           </div>
//           <p id='aboutsecondText'>Most businesses and organizations don’t have the tools or time to keep up with escalating and increasingly sophisticated threats to their physical and digital assets. With Algoritmik’s Deep Dive Investigations, you can assess and respond to these threats with the help of our highly skilled analysts to build cybersecurity analysis, threat assessments, analytic projects and deep-dive reports, all customized to your needs</p>
//         </div>
//       </div>
//     </>
//   )
// }

// export default algoabout


import aboutdata from "../../../content/aboutData.json"
function algoabout() {
  return (
    <>
      {aboutdata.map((item,index) => {
        return <div className='algoabout'key={index}>
        <div className='borderRight'>

          <p id='aboutfirstText'>{item.abouttitleDesc}</p>
          <div className='flexabout'>
            <p id='aboutfirstTitle'>{item.worldTitle}</p>
            <div className='innerflex'>
              <p id='traingleTitle1'><img className='triangleIcon' alt='traingleicon' src={item.triangle}></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.aboutUs}</p>
              <p id='triangleText1'>{item.aboutusdesc}</p>
            </div>
          </div>
          <p id='aboutsecondText'>{item.Worlddesc}</p>
          <p id='whoTitle'>{item.whotitle}</p>
          <div className='whoweare'>
            <div className='aboutsection1'>
            {item.section1.map((item,index)=> {
               return <div className='firstCard' key={index}>
                <img className='whoweareIcon' src={item.icon} alt='icon'></img>
                <p id='firstNumber'>{item.number}</p>
                <p id='firstText'>{item.title}</p>
              </div>
            })}
            </div>
            <div className='aboutsection2'>
              <img className='algoaboutlogoIcon' src={item.algortmiklogo} alt='logo'></img>
            </div>
            <div className='aboutsection3'>
            {item.section3.map((item,index)=> {
               return <div className='thirdCard' key={index}>
                <img className='whoweareIcon' src={item.icon} alt='icon'></img>
                <p id='firstNumber'>{item.number}</p>
                <p id='firstText'>{item.title}</p>
              </div>
            })}
            </div>
          </div>
          <div className='flexabout1'>
            <p id='aboutfirstTitle'>{item.proudtitle1} <span id='greenText'>{item.proudtitle2}</span></p>
            <div className='innerflex1'>
              <p id='traingleTitle1'><img className='triangleIcon' alt='traingleicon' src={item.triangle}></img>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.coffeetitle}</p>
              <p id='triangleText2'>{item.coffeedesc}</p>
            </div>
          </div>
          <p id='aboutsecondText'>{item.Prouddesc}</p>
        </div>
      </div>
      })}
    </>
  )
}

export default algoabout