import React, {useState} from 'react';
import './menu.css';
import gif from '../../images/Home.gif';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
 

const Menu = (props) => {
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
                          <NavLink href="/audiovisual">AUDIOVISUAL</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink href="/sonora">MÚSICA</NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink href="/producao">PRODUÇÃO CULTURAL</NavLink>
                      </NavItem>
                      <UncontrolledDropdown nav inNavbar>
                          <DropdownToggle nav caret>
                              APOIE
              </DropdownToggle >
                          <DropdownMenu right>
                              <DropdownItem>
                              <a href="/page3">Doe por QRcode</a>
                </DropdownItem>
                            <DropdownItem divider />
                              <DropdownItem>
                              <a href="/page4">Compartilhe</a>
                </DropdownItem>
                          </DropdownMenu>
                      </UncontrolledDropdown>
                  </Nav>
                  <NavItem>
                    <form className={"form-inline my-0 my-lg-0"}>
                    <input id='pesquisa' className={"form-control mr-sm-2"} type="search" placeholder="O que quer encontrar?"/>
                    <button id='pesquisa2' className={"btn btn-outline my-2 my-sm-0"} type="submit">Pesquisar</button><br/><br/>
                    </form>
                  </NavItem>
              </Collapse>
          </Navbar>
      </div>
  );
}


export default Menu;

