import React from 'react';
import studio from '../img/studio.jpg';
import git from '../img/github.png';
import '../style/Projects.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import drawn from '../img/studioDrawn.PNG';

const Studio = () => {
    return (
        <div>
            <Container style={{ textAlign: 'justify' }}>
            <h2 style={{ fontSize: '50px' }}>Studio 1337</h2>
            <br/>
                <p>Studio 1337 on pieni omistamani kauneusalan yritys, jonka perustin 17-vuotiaana asuessani Kotkassa. Olen pienestä pitäen ollut oma-aloitteinen, ja silloin ripsienpidennykset eivät olleet vielä yleisiä. Kävin yksityisen kurssin,
                    perustin toiminimen ja aloin kotona huoneessani hommiin. Koska olin Kotkassa ensimmäisten joukossa alalla, sain markkinat nopeasti haltuun ja oli aika vuokrata oma toimitila.
                    Töitä oli todella paljon ja rekrytoinkin hetken kuluttua apukäsiä, sekä avasin toisen toimipisteen Helsinkiin sinne muutettuani.  <br />
                    Tällä hetkellä yritys pyörii vuokratuolilaisten voimin.
                    <br />
                </p>
                <Row>
                    <Col>
                        <p style={{marginTop: '80px'}}>Yrityksen kotisivut ovat olleet Academyn sivuprojekti, joita olen työstänyt iltaisin. Päätin heti, että kerran elämässäni voin olla Product Owner
                            itse, joten lähestyin projektia varsin luovalla tavalla. Tunnen asiakaskuntani hyvin ja 80% heistä on alle 30-vuotiaita nuoria naisia.
                            Lähdin liikkeelle kuluttajan näkökulmasta ja kartoitin, mitä sivuilta erityisesti halutaan löytää: uusille asiakkaille kuvia työn laadusta ja vakioasiakkaille helppokäyttöinen, upotettu ajanvaraus.
                            Halusin sivujen erottuvan kilpailijoista ja päätin luoda sivuille samanlaisen tunnelman, kuin paikan päällä on: piirsin käsin Wacomilla toimitilojen aulan etusivuksi.
                         <br />
                            <br />
                        </p>
                    </Col>
                    <Col>
                        <h3>Mistä idea lähti:</h3>
                        <img className='responsive' src={studio} />
                    </Col>
                </Row>
                <Row>
                    <Col> <h3>Aloituskuvan lopputulos:</h3> <img className='responsive' src={drawn} /></Col>
                    <Col>
                        <p  style={{marginTop: '80px'}}>Sivulle saapuessa/päivittämällä piirretyt elementit liukuvat yksitellen omille paikoille CSS -animaatioiden avulla. Koska halusin mahdollisimman yksinkertaisen sivun, on kaikki informaatio samalla sivulla.
                            Eri sectioneihin vievä smoothscrollaus on kytketty itse piirretyihin sticky-nappeihin, jotka helpottavat kuluttajan liikkumista sivulla. <br/> <br/>
                            Kotisivu on staattinen, eikä siihen ole käytetty back-endia ollenkaan. 
                        </p>
                    </Col>
                </Row>
                <div className="links">
                    <a href="https://studioleetoy.z6.web.core.windows.net/">Linkki sovellukseen (projekti työn alla)</a>
                    <a href="https://github.com/johnur/Studio1337"><img className="git" src={git} /></a>
                </div>
            </Container>
        </div>
    );
}

export default Studio;