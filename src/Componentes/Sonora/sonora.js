import React from 'react';
import './sonora.css';
import { Card, CardHeader, CardBody, CardText} from 'reactstrap';

function Sonora() {
  return (
    <div>
      <Card id="card-config2">
        <CardHeader id="card-text2">L I L I T é DJ</CardHeader>
        <CardBody id="card-subtext2">
          <CardText>
            <strong>L I L I T</strong> é Dj residente do selo e coletivo Maddam
            em Recife - PE, selo que reclama o protagonismo feminino na cena
            eletrônica nordestina, da 3001 em João Pessoa - PB e da Sangria em
            Campina Grande - PB. Já passou por eventos como No Ar Coquetel
            Molotov, Fugácida, Tisck no Super After do MADA Festival, Hypnos,
            Nbomb, Espiral, Medusa, Zoma, ERROR 404, Reverse na Rua, Batestaca,
            3001, Sangria, Geranua, Parada Preta PB, participou do programa MOTE
            na Cereal Melodia e Techtronica na Radio Frei Caneca FM, e teve
            projetos exibidos na Radio Virusss, Radio Meladonna, Marem0ta,
            Cuharentena Visual Concept e no Festival Radiação da Sangra Muta.
          </CardText>
        </CardBody>
      </Card>
      <Card id="card-config3">
        <CardHeader id="card-text3">Ouça alguns dos meus sets:</CardHeader>
        <CardBody id="card-subtext3">
          <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src={'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/647280405&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'}>
          </iframe>
          <div className={'soundcloud-um'}>
            <a className={'soundcloud-dois'} href={'https://soundcloud.com/lilitbruja'} title="L I L I T" target="_blank">
              L I L I T</a> {' '}·{' '}
            <a className={'soundcloud-dois'} href={'https://soundcloud.com/lilitbruja/sangue-citrico-sangriatbt-060419'} title="Sangue cítrico" target="_blank">
              Sangue cítrico</a>
          </div>
          <br />
          <iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src={'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/719063863&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'}>
          </iframe>
          <div className={'soundcloud-um'}>
            <a className={'soundcloud-dois'} href={'https://soundcloud.com/lilitbruja'} title="L I L I T" target="_blank">
              L I L I T</a>{' '}·{' '}
            <a className={'soundcloud-dois'} href={'https://soundcloud.com/lilitbruja/travadaedissidente'} title="trava_da_&amp;_disse_dente" target="_blank">
              trava_da_&_disse_dente</a>
          </div>
        </CardBody>
      </Card>
    </div>  
  );
}

export default Sonora;
