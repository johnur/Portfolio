import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import Tilt from 'react-parallax-tilt';
import Phone from '../img/drawphone.png';
import Shadow from '../img/shadow.png';
import '../style/Contact.css';
import * as emailjs from 'emailjs-com';
import { getEmailJSuserID } from '../gAPIservice';



const FormPage = () => {
  const [formData, setFormData] = useState();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
    console.log('Handling change: ', formData)
  }

  const handleSubmit = async () => {
    if (formData) {
      let userID = await getEmailJSuserID();
      emailjs.send('sendgrid', 'template_km02ELtH', formData, userID)
      alert('Viestisi lähetetty, Johanna on Teihin yhteydessä mahdollisimman pian!')
      console.log('Handle sublit succeed: ', formData);
  }
};


  return (
    <MDBContainer>
      <div style={{paddingTop: '60px'}}>
      <MDBRow>
        <MDBCol md="6">
          <p className="h5 text-center mb-4">Soita</p>
          <Tilt gyroscope={true} tiltMaxAngleX={45} tiltMaxAngleY={45}>
            <img className='phone' src={Phone} />
          </Tilt>
          <img className='shadow' src={Shadow} />
        </MDBCol>
        <MDBCol md="6">
          <p className="h5 text-center mb-4">Lähetä sähköposti</p>
          <form className='email' method='post'>

            <div className="grey-text">
              <MDBInput
                name="nimi"
                onChange={handleChange}
                label="Nimi"
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                onChange={handleChange}
                name="email"
                label="Sähköposti"
                type="email"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                onChange={handleChange}
                name="aihe"
                label="Aihe"
                type="text"
                validate
                error="wrong"
                success="right"
              />
              <MDBInput
                onChange={handleChange}
                name="viesti"
                type="textarea"
                rows="2"
                label="Viesti"
              />
            </div>
            <div className="text-center">
              <MDBBtn onClick={handleSubmit} gradient="purple">Lähetä</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
      </div>
    </MDBContainer>
  );
}


export default FormPage;