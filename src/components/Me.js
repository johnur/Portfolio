import React from 'react';
import '../style/Me.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import namix from '../img/namix.jpg';
import kymppi from '../img/kymppi.jpg';
import mion from '../img/mio.jpg';
import kisut from '../img/kisut1.png';
import nasacats from '../img/cats.jpg';
import lintu from '../img/lintu.jpg';
import aqua from '../img/aqua.jpg';
import mary from '../img/mary.jpg';

const Me = () => {
    return (
        <div>
            <Container>
                <h2 style={{ textAlign: 'center', padding: '30px', color: '#6441C5 ' }}>MINUSTA:</h2>
                <Row>

                    <Col>
                        <h3 style={{ color: '#4145C5' }}>Yleisesti:</h3>
                        <p>Olen 26-vuotias empaattinen ja reilu kissahullu Sarfvikista. Ihmisenä olen rento ja välillä ehkä jopa hauska. Academyn tarjoama oikoreitti tietotekniikan urapolulle on parasta, mitä minulle on tapahtunut. 
                            Olen ollut aina kiinnostunut tekniikasta ja tottunut toimimaan lähipiirini IT-tukihenkilönä.
                           Nuorempana purkasin vanhat puhelimet, eikä mennyt kauan, kun osasin jo vaihtaa näyttöjä ja akkuja. Uteliaana tyyppinä olen pitkäjänteinen, enkä helpolla luovuta. 
                        </p>
                    </Col>
                    <Col>
                        <h3 style={{ color: '#4145C5' }}>Harrastukset:</h3>
                        <p>Vapaa-ajallani pidän itseni kiireisenä eri urheilulajien ja taiteen parissa.
                        Golfaus, frisbee-golfaus, kuntosali tai jooga saavat minut hyvälle tuulelle ja auttavat jaksamaan paremmin.
                        Aivojani tykkään helliä luomalla taidetta.
                        </p>
                        <br />
                    </Col>
                </Row>
                <h2 style={{ textAlign: 'center', padding: '30px', color: '#4186C5' }}>Kuvia tekemistäni projekteistä:</h2>
                <br />
                <h4 style={{ color: '#4CB8DC' }}>Markkinoinnin sisällöntuottoa:</h4>
                <Row>
                    <Col>
                        <img className='responsive' style={{ maxWidth: '300px' }} src={kymppi} />
                    </Col>
                    <Col>
                        <img className='responsive' style={{ maxWidth: '300px' }} src={mion} />
                    </Col>
                    <Col>
                        <img className='responsive' src={namix} />
                    </Col>
                </Row>
                <br />
                <h4 style={{ color: '#4CC8DC' }}>Taidetta:</h4>
                <Row>
                    <Col>
                        <img className='responsive' style={{ maxWidth: '300px' }} src={lintu} />
                    </Col>
                    <Col>
                        <img className='responsive' style={{ maxWidth: '300px' }} src={aqua} />
                    </Col>
                    <Col>
                        <img className='responsive' style={{ maxWidth: '300px' }} src={mary} />
                    </Col>
                </Row>
                <h4 style={{ color: '#4CD5DC' }}>Digitaalista taidetta &amp; Photoshoppailua metsäkissoistani:</h4>
                <Row>
                    <Col>
                        <img className='responsive' style={{ maxWidth: '330px' }} src={kisut} />
                    </Col>
                    <Col>
                        <img className='responsive' style={{ maxWidth: '550px' }} src={nasacats} />
                    </Col>

                </Row>
            </Container>

        </div>
    );
}

export default Me;