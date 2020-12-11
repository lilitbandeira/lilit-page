import React from 'react';
import './producao.css';
import { Card, CardHeader, CardBody, CardText} from 'reactstrap';

function Producao() {
  
  return (
    <div>
      <Card id="card-config5">
        <CardHeader id="card-text5">L I L I T é Realizadora Audiovisual</CardHeader>
        <CardBody id="card-subtext5">
          <CardText>
          <strong>L I L I T</strong> também é Produtora e Gestora de projetos culturais. É idealizadora, curadora e produtora da 3001 em João Pessoa - PB, projeto cultural voltado à música eletrônica e experimentações visuais, co-produz a Sangria em Campina Grande - PB, evento que elabora através do techno experimentações sonoras e visuais imersivas e a Fêa culetiva em Recife - PE, coletivo que realiza festas como Rastêra, cines e outras atividades culturais. Desenvolve ainda a 3001Radio, projeto da 3001 que transmite trabalhos de artistas nordestines e convidades em plataformas como mixlr, twitch e periscope em temporadas.
          </CardText>
        </CardBody>
      </Card> 
      <div className={'video-div2'}> 
        <iframe className={'video-daily2'} frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/x7w5zg7" width="100%" height="100%" allowfullscreen >
        </iframe>
      </div>    
    </div> 
  );
}
export default Producao;
