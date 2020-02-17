import React from 'react';
import git from '../img/github.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Vanha from '../img/vanhaTeesalonki.PNG';
import Uusi from '../img/teeUusi.PNG';

const Teesalonki = () => {
    return (
        <div>
            <Container>
            <h2 style={{ fontSize: '50px', color: '#5d8a5a' }}>Teesalonki Sylvia</h2>
            <br/>
            <p style={{ textAlign: 'justify' }}> Teesalonki Sylvia on pieni viihtyisä teehuone Hyvinkäällä, jonka kotisivut kaipasivat uudistusta modernimpaan ilmeeseen. Edelliset sivut olivat toteutettu PHP:llä vuosia sitten, 
             joten tulimme tulokseen, että helpointa on aloittaa kokonaan alusta. Projekti toteutettiin kolmen hengen tiimissä, ja tämä oli ensikosketukseni Reactiin. 
             Asiakkaalta tulivat tarkat sisällölliset vaatimukset, mutta ulkoasuun saimme täysin vapaat kädet.
            <br />
                <h4 style={{color: '#5d8a5a',  textAlign: 'center'   }}>Roolini projektissa:</h4>
                <li>- Sivun rakenne, asettelu ja ulkoasu</li>
                <li>- Logojen uudistaminen</li>
                <li>- Parallax</li>
                <li>- Fontit</li>
                <li>- Napit</li>
                <li>- Footer</li>
                <li>- Sähköposti/formi</li> <br/>
             
                Kotisivut antavat lämpimän ensivaikutelman paikasta ja yleisesti yrityksestä. Halusin, että valmis tuote näyttää luotettavalta, ja että siitä välittyy salongin tunnelma. 
                Raikkautta ulkoasuun toivat uudistetut logot ja selkeä sivurakenne. Mielestäni yrityksen kuvapankissa oli todella hienoja kuvia, joista sai heti sellaisen vaikutelman, että teevalikoima on kattava.
                Halusinkin hyödyntää nimenomaan näitä kauniita kuvia Parallaxina, ja käyttää muita värejä mahdollisimman hillitysti. 
            
            </p><p style={{ textAlign: 'center' }}>Ennen:</p>
            <img className='responsive' style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block'}} src={Vanha}/> <br/> 
            <p style={{ textAlign: 'center' }}>Jälkeen:</p>
            <img className='responsive' style={{marginLeft: 'auto', marginRight: 'auto', display: 'block'}} src={Uusi}/>
            <div style={{ textAlign: 'center' }}>
                <a href="https://teesalonkisylvia.com/">Linkki Teesalonkiin</a> <br/>
                <a href="https://github.com/unie31/teesalonki"><img className="git" src={git} /></a>
            </div>
            </Container>
        </div>

    );
}

export default Teesalonki;