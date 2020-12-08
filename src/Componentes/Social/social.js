import React from 'react';
import './social.css';
import linktree from '../../images/linktree.png'; 
import instagram from '../../images/instagram.png';
import twitter from '../../images/twitter.png';
import dailymotion from '../../images/dailymotion.png';
import soundcloud from '../../images/soundclpud.png';
import contato from '../../images/contato.png';


export default function Social() {

  return (
    <div>
      <ul id="social" className={"w3-ul w3-display-left"}>
        <li>
          <a className={"links-menu"} target="_blank" href={"https://linktr.ee/lilitbruja"}>
            <img alt="icone linktree" width="40px" type='image/png' src={linktree}/> 
          </a>  
        </li>
        <li>
          <a className={"links-menu"} target="_blank" href={"https://instagram.com/lilitbruja"}>
            <img alt="icone instagram" width="40px" src={instagram}/>
          </a>
        </li>
        <li>
          <a className={"links-menu"} target="_blank" href={"https://twitter.com/lilitbruja"}>
            <img alt="icone twitter" width="40px" src={twitter}/> 
          </a>
        </li>
        <li>
          <a className={"links-menu"} target="_blank" href={"https://dailymotion.com/lilitbruja"}>
            <img alt="icone dailymotion" width="40px" src={dailymotion}/><br/>
          </a>
        </li>
        <li>
          <a className={"links-menu"} target="_blank" href={"https://soundcloud.com/lilitbruja"}>
            <img alt="icone soundcloud" width="40px" src={soundcloud}/><br/>
          </a>
        </li>
        <li>
          <a className={"links-menu"} target="_blank" href={""}>
            <img alt="icone contato" width="40px" src={contato}/>
          </a>
        </li>
    </ul>
  </div>  
  )
}