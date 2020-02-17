import React from 'react';
import Start from './Start';
import Who from './Who';
import FormPage from './FormPage';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import Dream from './Dream'; 
import Works from './Works';
import '../style/Scrollbar.css';


function Mainpage() {
  return (
    <div className="App" className="scrollbar scrollbar-morpheus-den">
      <div >
      <Start />
      <Who />
      <Dream />
      <Works />
      <FormPage />
      </div>
    </div>
  );
}

export default Mainpage;
