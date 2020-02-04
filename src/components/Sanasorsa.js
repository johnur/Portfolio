import React from 'react';
import diagram from '../img/ss-diagram.png';
import git from '../img/github.png';
import '../style/Projects.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Sanasorsa = () => {
    return (
        <div>
            <h2>Sanasorsa</h2>
            <Container>
                <p>Academyn kahden viikon loppuprojekti "Sanasorsa" oli neljän hengen ryhmätyö. Sanaselityspeli joka käyttää Azuren speech-to-text, sekä Word2Vec koneoppimista.
                    Tarkoituksena oli oppia, miten yhdistetään eri palasia yhteen, miten ryhmässä työskennellä ja miten koneoppimisesta voisi saada toimivan sovelluksen. 
                    Pelin kaikki komponentit on suunniteltu toimimaan Azure-käyttöjärjestelmässä. Tämä arkisto sisältää koodin backend REST-API: lle ja käyttöliittymän 
                    staattiset HTML / JavaScript-sivut. Koneoppimisalgoritmien kouluttama Word2Vec-malli toimii erillisenä Azure-toimintona ja käsittelee mallin kyselyä 
                    vektorien välisistä etäisyyksistä ja pelaajan arvausten pisteyttämistä. Toimintoa kutsutaan taustalla olevalla REST-sovellusliittymällä, joka on kirjoitettu C #: 
                    ksi sen sijaan, että sovelluksen käyttöliittymä kutsuisi sitä suoraan. </p>
                <Row>c
                    <Col>
                    <p>Peli on ääniohjattu ja sitä voidaan pelata ilman näppäimistöä. Vaihtoehtoisesti pelaaja voi kirjoittaa arvauksensa tekstikenttään. 
                        Pelin tavoitteena on listata niin monta peliä kuin sanassa, jonka peli tarjoaa 10 sekunnissa. Kolmen kierroksen jälkeen pelaaja 
                        voi valita, annetaanko heidän pisteet sisällytettäväksi tulostauluun, tai hän voi aloittaa uudelleen tallentamatta tuloksia. <br/>
                        <br/>
                        Jotta ääniohjaus toimisi, sinun on avattava peli HTTPS-linkin kautta. Koska sivusto on tarkoitettu vain konseptitaidon esittelykäyttöön, 
                        pisteiden laskeminen voi kestää noin 30 s - 1 minuuttia ensimmäisen kierroksen aikana, koska Azure-toiminnon on suoritettava kylmäkäynnistys. </p>
                    </Col>
                    <Col>
                        <h3>Sovelluksen rakenne:</h3>
                        <img style={{ width: '500px' }} src={diagram} />
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

export default Sanasorsa;