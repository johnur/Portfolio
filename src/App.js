import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'mdbreact/dist/css/mdb.css';
import './style/Scrollbar.css';
import Mainpage from './components/Mainpage';
import Me from './components/Me'; 
import Studio from './components/Studio'; 
import Teesalonki from './components/Teesalonki'; 
import Sanasorsa from './components/Sanasorsa'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App" className="scrollbar scrollbar-morpheus-den">
      <div >
        <Router>
          <Switch>
            <Route exact path="/" component={Mainpage}/>
            <Route exact path="/me" component={Me}/>
            <Route exact path="/Studio" component={Studio}/>
            <Route exact path="/Teesalonki" component={Teesalonki}/> 
            <Route exact path="/Sanasorsa" component={Sanasorsa}/>      
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
