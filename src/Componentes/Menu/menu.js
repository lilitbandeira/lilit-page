import React, {useState} from 'react';
import './menu.css';
import gif from '../../images/Home.gif';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import linktree from '../../images/linktree.png'; 
import instagram from '../../images/instagram.png';
import twitter from '../../images/twitter.png';
import dailymotion from '../../images/dailymotion.png';
import soundcloud from '../../images/soundclpud.png';
import contato from '../../images/contato.png';

const Menu = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
      <div className={'menu-position'}>
          <Navbar id='menu' dark className={'nav-text'} expand="md">
              <NavbarBrand href="/"> <img alt="Logo L I L I T" src={gif} width="90px"/> </NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                  <Nav className={"mr-auto"}>
                      <NavItem>
                          <NavLink className={'link-formato'} href="/audiovisual">AUDIOVISUAL</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink className={'link-formato'} href="/sonora">MÚSICA</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink className={'link-formato'} href="/producao">PRODUÇÃO CULTURAL</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink className={'link-formato'} href="/apoie">APOIE</NavLink>
                      </NavItem>
                  </Nav>
                  <Nav className={'social'}>
                        <a className={"links-menu"} target="_blank" href={"https://linktr.ee/lilitbruja"}>
                        <img className={"links-img"} alt="icone linktree" width="30" type='image/png' src={linktree}/> 
                        </a>
                        <a className={"links-menu"} target="_blank" href={"https://instagram.com/lilitbruja"}>
                            <img className={"links-img"} alt="icone instagram" width="30" src={instagram}/>
                        </a>
                        <a className={"links-menu"} target="_blank" href={"https://twitter.com/lilitbruja"}>
                            <img className={"links-img"} alt="icone twitter" width="30" src={twitter}/> 
                        </a>
                        <a className={"links-menu"} target="_blank" href={"https://dailymotion.com/lilitbruja"}>
                            <img className={"links-img"} alt="icone dailymotion" width="30" src={dailymotion}/>
                        </a>
                        <a className={"links-menu"} target="_blank" href={"https://soundcloud.com/lilitbruja"}>
                            <img className={"links-img"} alt="icone soundcloud" width="30" src={soundcloud}/>
                        </a>
                        <a className={"links-menu"} target="_blank" href={""}>
                            <img className={"links-img"} alt="icone contato" width="30" src={contato}/>
                        </a>
                  </Nav>
              </Collapse>
          </Navbar>
      </div>
  );
}


export default Menu;

