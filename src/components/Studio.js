import React from 'react';
import studio from '../img/studio.jpg';
import git from '../img/github.png';
import '../style/Projects.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Studio = () => {
    return (
        <div>
            <h2>Studio 1337</h2>
            <Container>
                <p>
                    Studio 1337 on minun omistama pieni kauneusalan yritys, jonka perustin 17-vuotiaana asuessani Kotkassa. Joten tuntui luontevalta ajatukselta tehdä kotisivut itse, kreisit semmoiset, 
                    koska hoitola on muutenkin normaaleista kauneushoitoloista poikkeavaa. 
                </p>
                <Row>
                    <Col>
                    <p>Kotisivut ovat olleet Academyn sivuprojekti, joita olen työstänyt iltaisin. Päätin heti, että kerran elämässäni voin olla Product Owner
                        itse, joten lähestyin projektia varsin luovalla tavalla. Tunnen asiakaskuntani hyvin ja 80% heistä on alle 30-vuotiaita nuoria naisia.
                        Lähin kuluttajan näkökulmasta lähestymään projektiin, mitä sieltä yleensä halutaan löytää. Tietenkin työn laatu sekä vakio asiakkaille ajanvaraus, 
                        hinku erottautua oli kuitenkin läsnä, ja päätin luoda sivuille samanlaisen tunnelman niin kuin paikan päällä on. Joten lähin piirtämään käsin
                        detaljeja.
                         <br/>
                        <br/>
                        </p>
                    </Col>
                    <Col>
                        <h3>Mistä idea lähti:</h3>
                        <img style={{ width: '500px' }} src={studio} />
                    </Col>
                </Row>
                <div className="links">
                <a href="https://sanasorsa.azurewebsites.net/">Linkki sovellukseen</a>
                <a href="https://github.com/johnur/Sanasorsa"><img className="git" src={git} /></a>
            </div>
            </Container>
            
        </div>
    );
}

export default Studio;