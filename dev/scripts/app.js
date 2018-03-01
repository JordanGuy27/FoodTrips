import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import axiosReq from './axiosReq';
import Axios from 'axios';
import AxiosReq from './axiosReq';



class App extends React.Component {
  render(){
    return (
      <AxiosReq />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
