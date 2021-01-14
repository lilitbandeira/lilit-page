import React from 'react';
import './apoie.css';
import QrCode from '../../images/qrcode.jpeg';
import { Card, CardHeader, CardBody, CardText} from 'reactstrap';


function Apoie() {

  return (
    <div>
      <Card id="card-config">
        <CardHeader id="card-text" className={'card-green'}><p className={'apoie-animation titulo-animation'}>APOIE para manter estes trabalhos acontecendo</p></CardHeader>
        <CardBody id="card-subtext" className={'center-text'}>
          <CardText>
            <img id='qrcode' src={QrCode} /><br/><br/>
            ou faça sua doação através de <br/><br/>
            Chave Pix: contatodalilit@gmail.com<br/>
            PayPal: lilitbandeira@gmail.com
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
}
export default Apoie;