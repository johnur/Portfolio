import React from 'react';
import cats from '../img/cats.jpg';
import drawed from '../img/kisut1.png';
import '../style/me.css';


const Me = () => {
    return (
        <div>
            <h1>Minusta vapaamuotoisesti</h1>
            <p>

                <h3>Yleisesti:</h3>
                <p>Olen 26-vuotias empaattinen kissahullu Kirkkonummelta. Asun kirjaimellisesti keskellä Sarfvikin golfkenttää, koska elämä Helsingin ydinkeskustassa tuntui liian hektiseltä,
                    ja vanhana maalaisena viihdyn keskellä linnunlaulua paljon paremmin.  </p>
                <h3>Harrastukset:</h3>
                Vapaa-ajallani tykkään pitää balanssin työelämän kanssa, eli urheilen ja teen paljon luovia asioita.
                Golfaus, fribee-golfaus, kuntosali, jooga sekä maantiepyöräilyt kuuluvat kauden mukaan päivittäiseen arkeeni. Tykkään pitää urheilun
                sen verran monipuolisena, ettei se tuntuisi urheilulta, vain nimenomaan hauskalta vapaa-ajan vietolta.
<br />
                Jos aivot kaipaavat luovaa hetkeä, tykkään tietokonellä piirtää joko piirtopöydällä tai sitten pidän muuten vain hauskaa photoshopissa.
           Lisäski soitan huilua tai maalaan ihan perinteisillä ölijy tai akvarelliväreillä.</p>

           <p>Lisäksi olen tunnetusti crazy cat lady, sen voi luultavasti huomata myös alla olevista kuvista. Minulla on kaksi Neva Masquerade metsäkissaa, Leopold ja Harald. Heidän 
               kanssa tulee Kirkkonummen metsissä puuhailtu ja sinnikyyteni ansiosta osavaat jopa muutamia temppuja. 
           </p>
            <img className="psCats" src={cats} alt='Photoshopped cats' />
            <img className="Wacom" src={drawed} alt='Drawed cats'/>
        </div>
    );
}

export default Me;