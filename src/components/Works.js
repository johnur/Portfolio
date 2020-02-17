import React from 'react';
import '../style/Works.css';
import Studioleet from '../video/studio1337.mp4';
import { Link } from 'react-router-dom';
import Sorsa from '../img/sanasorsa2020.png';
import Teesalonki from '../video/teesalonki.mp4';



const Works = () => {
    return (
        <div className="services-grid">
        
                <div className="service service3">
                    <h3>STUDIO 1337</h3>
                    <span><video width="350" controls loop autoPlay playsInline muted src={Studioleet} /></span>
                    <ul>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>Azure</li>
                    <li>Wacom piirtopöytä</li>
                    </ul>
                    <Link to="/studio" className="cta">Katso lisää <span className="ti-angle-right"></span></Link>
                </div>

                <div className="service service1">
                    <h3>TEESALONKI</h3>
                    <span><video width="350" style={{paddingBottom: '30px'}} controls loop autoPlay playsInline muted src={Teesalonki} /></span>
                    <ul>
                    <li>ReactJS</li>
                    <li>JavaScript</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>AWS</li>
                    </ul>
                    <Link to="/teesalonki"className="cta">Katso lisää <span className="ti-angle-right"></span></Link>
                </div>

                <div className="service service2">
                    <h3>SANASORSA</h3>
                    
                    <span><img src={Sorsa} className='sorsanen' style={{ paddingBottom: '30px'}}/></span>
                    <ul className="ul-cols">
                    <li>C#</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>Rest API</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>Azure</li>
                    <li>Speech-to-text</li>
                    <li>Functions</li>
                    <li>SQL</li>
                    <li>Voikko</li>
                    <li>Word2Vec</li>
                    </ul>
                    <Link to="/sanasorsa"className="cta">Katso lisää <span className="ti-angle-right"></span></Link>
                </div>
         
        </div>

    );
}
export default Works;