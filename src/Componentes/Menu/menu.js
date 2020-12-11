import React, {useState} from 'react';
import './menu.css';
import gif from '../../images/Home.gif';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import ApiBusca from '../../services/api';

const Menu = (props) => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  const [entrada, setEntrada] = useState('');
  const [resultado, setResultado] = useState(null);
  const pesquisaWeb = (event) => {
    event.preventDefault();

    if (entrada.trim() !== ''){
        ApiBusca.get(entrada).then(
            (response) => {
                if (response !== null && response.data !== null){
                    setResultado(response.data);
                }
            }
        )
    } else {
        setResultado(null);
    }
  }

  /*var options = {
    method: 'GET',
    url: {ApiBusca},
    params: {pageNumber: '1', q: '', autoCorrect: 'true', pageSize: '10'},
    headers: {
      'x-rapidapi-key': 'aec654201dmsh5c9f461abe6a604p19428cjsn4f9340eb7089',
      'x-rapidapi-host': 'contextualwebsearch-websearch-v1.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  }); */

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
                  <NavItem> 
                    <form className={"form-inline my-0 my-lg-0"}>
                    <input id='pesquisa' className={"form-control mr-sm-2"} type="search" placeholder="O que quer encontrar?" onChange={ (e) => setEntrada(e.target.value) }/>
                    <button id='pesquisa2' className={"btn btn-outline my-2 my-sm-0"} type="submit" onClick={pesquisaWeb}>Pesquisar</button><br/><br/>
                    {resultado !== null ?
                    <div> {resultado} </div> : "" } 
                    </form>
                  </NavItem>
              </Collapse>
          </Navbar>
      </div>
  );
}


export default Menu;

