import React from 'react';
import './audiovisual.css';
import { Card, CardHeader, CardBody, CardText} from 'reactstrap';

function Audiovisual() {
  return (
    <div>
      <Card id="card-config">
        <CardHeader id="card-text" className={'card-green'}><p className={'av-animation titulo-animation'}><strong className={'lilit-name'}>L I L I T</strong> é Realizadora Audiovisual</p></CardHeader>
        <CardBody id="card-subtext" className={'justify-text'}>
          <CardText>
            No Audiovisual, <strong className={'lilit-name'}>L I L I T</strong> já realizou um curta metragem chamado Transborgs, lançado em 2019 na mostra absurda do 12º Festival de cinema de Triunfo, no cinema ainda trabalhou como maquiadora e produtora e objetos no curta Sombra de Fernanda Siqueira (2018), como maquiadora e fotógrafa Still no curta O fio de Anti Ribeiro (2018) e como fotógrafa e montadora do documentário Lia de Igarassu de Virgínia Passos pelo programa #CulturaemRedeSescPE (2020). Sua atuação no audiovisual contempla fotografia, arte, som, montagem e finalização. Foi Júri do 7º Recifest – Festival de Cinema de Diversidade Sexual e de Gênero, em 2019 pela ABD/Apeci (Associação Brasileira de Documentaristas e Curtametragistas de Pernambuco/Associação Pernambucana de Cineastas).
          </CardText>
        </CardBody>
      </Card>
      <div className={'video-div'} > 
        <iframe className={'video-daily'} frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/x7w79vg" width="100%" height="100%" allowfullscreen> 
        </iframe> 
      </div>
    </div>
  );
}
export default Audiovisual;
