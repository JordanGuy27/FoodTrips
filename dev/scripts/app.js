import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import AxiosReq from './axiosReq';
import Auth from './authentication';
import MapContainer from './google';


// Initialize Firebase
var config = {
  apiKey: "AIzaSyA2f5SWWUhBul0ey99wAJtcEMU_wLCu61Q",
  authDomain: "dude-wheres-my-food.firebaseapp.com",
  databaseURL: "https://dude-wheres-my-food.firebaseio.com",
  projectId: "dude-wheres-my-food",
  storageBucket: "dude-wheres-my-food.appspot.com",
  messagingSenderId: "351310641968"
};
firebase.initializeApp(config);

class App extends React.Component {

    render() {
      return (
          <div>
            <Auth />
            <AxiosReq />
            <MapContainer />
          </div>
      )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
