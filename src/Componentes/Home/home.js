import React from 'react';
import './home.css';
import { Card, CardHeader, CardBody, CardText, UncontrolledCarousel } from 'reactstrap';
import Slideum from '../../images/slideum.jpg';
import Slidedois from '../../images/slidedois.jpg';
import Slidezero from '../../images/slidezero.jpg';  

function Home() { 

  const items = [
    {
      src: Slidezero,
      altText: 'Frame de Transborgs, primeiro filme de Lilit',
      caption: 'Primeiro Curta metragem de L I L I T',
      header: 'Transborgs',
      key: '1',
    },
    {
      src: Slideum,
      altText: 'Lilit tocando na ERROR404, em Boa Viagem',
      caption: 'Live set de L I L I T em Festa no Recife',
      header: 'ERROR 404',
      key: '2'
    },
    {
      src: Slidedois,
      altText: 'ilit tocando com desna na Hypnos, praia do pina',
      caption: 'Live set de L I L I T b2b Desna na Praia do Pina',
      header: 'Hypnos colokal',
      key: '3'
    }
  ];
  return (

    <div >
      <Card id='card-config'>
        <CardHeader id='card-text' className={'card-green'}><p className={'home-animation titulo-animation'}>Quem é <strong className={'lilit-name'}>L I L I T</strong>?</p></CardHeader>
        <CardBody id='card-subtext' className={'justify-text'}>
          <CardText>Lilit Bandeira é a artista por trás do projeto de música eletrônica e audiovisual <strong className={'lilit-name'}>L I L I T</strong>. Paraibana, reside em Recife desde 2017 onde cursa Cinema e Audiovisual na Universidade Federal de Pernambuco - UFPE. Como DJ atua como residente do coletivo recifense Maddam Music e possui uma carreira com trabalhos em festas, festivais e rádios do país. No audiovisual possui um curta metragem chamado Transborgs, lançado em 2019 na mostra absurda do 12º Festival de cinema de Triunfo. Sua atuação no audiovisual contempla fotografia, arte, som, montagem e finalização. Lilit também é produtora e gestora cultural independente, idealizadora do projeto 3001 em João Pessoa e produtora da festa Sangria em Campina Grande. Atualmente dedica-se ainda ao Desenvolvimento Web Front-end.</CardText>
        </CardBody>
      </Card>
      <UncontrolledCarousel className={'slide-config'} items={items} />
    </div>
  );
};

export default Home;
