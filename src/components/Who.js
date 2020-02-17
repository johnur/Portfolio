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
                        <p>
                        <br />
                            <br />
                            <br />
                            <br/>
                            Olen Johanna-Kristiina ja unelmani on luoda uniikkeja ja graafisia ulkoasuja, sekä mieleenpainuvia käyttäjäkokemuksia. 
                            Valmistuin vuonna 2019  <a  href="https://www.academy.fi/">Academyn</a> C#-luokalta IT -juniorikonsultiksi, minkä jälkeen olen kasvattanut supervoimiani erityisesti Front Endin osalta.
                            Varmistaakseni voimien tasapuolisen kasvun, olen aloittelevana moniosaajana kiinnostunut myös full stack -kehittämisestä.  <br/>
                            <br/>
                            Olen entisessä elämässäni toiminut yrittäjänä sekä markkinoinnin parissa, ja nyt tavoitteenani on laajentaa osaamistani mahdollisimman monessa koodauksen osa-alueessa.
                            <br />
                            <br />
                            <Link to="/me"><a>Minusta lisää</a></Link>

                        </p>
                     
                    </Col>
                </Row>
              
               <Col>
                    <h5 style={{ textAlign: 'center', marginTop:'50px' }}>Tämän hetken fiilikset:</h5>
                    <br />
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
                            <div></div><p>ReactJS</p>
                        </div>
                        <div id="progressbar4">
                            <div></div><p>Azure</p>
                        </div>
                        <div id="progressbar5">
                            <div></div><p>Motivaatio</p>
                        </div>
                        <br />
                    </div>
                </Col>
            </Container>
        </div>
    );
}
export default Who;