import React from 'react';
import diagram from '../img/ss-diagram.png';
import git from '../img/github.png';
import '../style/Projects.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import sorsa from '../img/sanasorsa2020.png';


const Sanasorsa = () => {
    return (
        <div>
            <Container>
            <h2 style={{ fontSize: '50px'}}>Sanasorsa</h2>
            <br/>
                <p>Academyn kahden viikon loppuprojekti "Sanasorsa" oli neljän hengen ryhmätyö. Sanasorsa on sananselityspeli, joka käyttää Azuren speech-to-text -ominaisuutta, sekä Word2Vec-koneoppimista.
                    Tarkoituksena oli oppia, miten yhdistetään eri palasia yhteen, miten ryhmässä työskennellään ja miten koneoppimista hyödyntämällä voitaisiin saada leikkisä sovellus.
                    Pelin kaikki komponentit on suunniteltu toimimaan Azure-käyttöjärjestelmässä. Koneoppimisalgoritmien kouluttama Word2Vec-malli toimii erillisenä Azure-toimintona, joka käsittelee mallin kyselyitä
                    vektorien välisistä etäisyyksistä ja pisteyttää pelaajan sana-arvaukset sen mukaisesti.  <br /> </p>
                <p>Peli on ääniohjattu ja sitä voidaan pelata ilman näppäimistöä. Vaihtoehtoisesti pelaaja voi kirjoittaa arvauksensa tekstikenttään. Jotta ääniohjaus toimisi, peli on avattava HTTPS-linkin kautta. Koska sivusto on tarkoitettu vain konseptitaidon esittelykäyttöön,
                        pisteiden laskeminen voi kestää noin 30 s - 1 minuuttia ensimmäisen kierroksen aikana, koska Azure-toiminnon on suoritettava kylmäkäynnistys. </p>

                <h4 style={{ color: '#dee81a', textAlign: 'center' }}>Roolini projektissa:</h4>
                <li>- Azure Speech-to-Text ominaisuus</li>
                <li>- Ajaxilla API-kutsut </li>
                <li>- Client ulkoasu</li>

                <Row>
                    <Col >
                        <p style={{marginTop: '80px'}}>Koska kyseessä oli leikkisä peli, halusin myös ulkoasun olevan sen mukainen. Tämä oli myös ensikosketukseni JavaScript/HTML:ään (minulle) isommassa mittakaavassa. En halunut turvautua BootStrappiin, vaan
                            ajatukseni oli "taistella" loppuun asti CSS:n kanssa, ja oppia lisää sen ominaisuuksista.
                        </p>

                    </Col>
                    <Col>
                        <h3>Lopputulos:</h3>
                        <img className='responsive' style={{ maxWidth: '500px', height: 'auto' }} src={sorsa} />
                    </Col>
                </Row>
                <h3 style={{marginTop: '40px'}}>Sovelluksen rakenne:</h3>
                <img className='responsive' style={{ maxWidth: '1000px', height: 'auto', marginLeft: 'auto', marginRight: 'auto' }} src={diagram} />

                <div style={{ textAlign: 'center' }}>
                    <a href="https://sanasorsa.azurewebsites.net/">Linkki sovellukseen</a> <br/>
                    <a href="https://github.com/johnur/Sanasorsa"><img className="git" src={git} /></a>
                </div>
            </Container>

        </div>
    );
}

export default Sanasorsa;