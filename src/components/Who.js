import React from 'react';
import '../style/Who.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import me from '../img/johnur.png';
import { Link } from 'react-router-dom';


const Who = () => {
    return (
        <div className="who">
            <Container>
                <Row>
                    <Col sm className='img'>
                        <img src={me} />
                    </Col>
                    <Col sm >
                        <p style={{marginTop: '25%'}}>
                            Olen Johanna-Kristiina, valmistuin <a  href="https://www.academy.fi/">Academyn</a> C# luokalta IT-junior konsultiksi 2019 vuoden lopussa.
                            Vimme vuoden syyskuussa mulla ei ollut mitään tietoa, mikä on JavaScript tai C#, taikka
                            mikä niiden ero on. Olen innokas oppimaan lisää ja tykkään työskennellä tiimissä.
                            Unelmani on päästä oppimaan ja työskentelemään motivoivassa tiimissä ja luoda silmäänpistäviä web-sivuja. 

                            <br />
                            <br />
                            Entisessä elämässäni toimin markkinoinnin parissa, sekä yrittäjänä.
                            Mutta tietotekniikka on ollut intohimoni aina, ja aino asia jota kadun, on se, että en ryhtynyt tähän aikaisemmin. <br/>
                            <Link to="/me"><a>Minusta lisää</a></Link>
                        </p>
                    </Col>
                </Row>
                <Col>
                <h2 style={{textAlign: 'center'}}>JUNIORIN KOKEMUS:</h2>
                <br/>
                    <div>
                    <div id="progressbar2">
                            <div></div><p>HTML &amp; CSS</p>
                        </div>
                        <div id="progressbar">
                            <div></div><p>C#</p>
                        </div>
                        <div id="progressbar1">
                            <div></div><p>JavaScript</p>
                        </div>
                       
                        <div id="progressbar3">
                            <div></div><p>React</p>
                        </div>
                        <div id="progressbar4">
                            <div></div><p>Azure</p>
                        </div>
                        <div id="progressbar5">
                            <div></div><p>Motivaatio</p>
                        </div>
                    </div>
                </Col>
            </Container>
        </div>
    );
}
export default Who;