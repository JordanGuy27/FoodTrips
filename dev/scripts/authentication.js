import React from 'react';
import ReactDOM from 'react-dom';
import AxiosReq from './axiosReq';
import axios from 'axios';

class Auth extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
            user: {},
            userText: '',
            lat: '',
            lng: ''

        }
        this.signIn = this.signIn.bind(this);
        this.signOut = this.signOut.bind(this);
        this.submitTest = this.submitTest.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addRest = this.addRest.bind(this);
        this.submit = this.submit.bind(this);
    }
    componentDidMount() {
        firebase.auth().onAuthStateChanged((res) => {
            console.log(res);
            if (res) {
                this.setState({
                    loggedIn: true,
                    user: res
                })
            } else {
                this.setState({
                    loggedIn: false,
                    user: {}
                })
            }
        });
    }

    signIn(e) {
        const provider = new firebase.auth.GoogleAuthProvider();

        provider.setCustomParameters({
            prompt: 'select_account'
        })

        firebase.auth().signInWithPopup(provider)
            .then((user) => {
                console.log(user);
            })
    }

    signOut(e) {
        firebase.auth().signOut();
    }

    handleChange(e) {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    addRest(e) {
        e.preventDefault();

        const dbRef = firebase.database().ref()

        dbRef.push()

        this.setState({
            userText: ''
        })
    }
    submit(e) {
        e.preventDefault();
        // const inputResult = `googlecall.com/v1/?query=${inputValue}`
        const inputResult = this.state.userText;
        console.log(inputResult);
        const googleURL = "https://maps.googleapis.com/maps/api/geocode/json?";
        axios
            .get(`${googleURL}`, {
                params: {
                    key: "AIzaSyDNBpAAUuUkRyioDLQUQW_DZYIb1PiY85Q",
                    address: inputResult
                }
            })
            .then(({ data }) => {
                this.setState({
                    lat: data.results[0].geometry.location.lat,
                    lon: data.results[0].geometry.location.lng
                });
                console.log(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng);
            });
    }
    
    render() {
    return (
        <div>

            <form onSubmit={this.submit}>
                 <input type="text" id="userText" value={this.state.userText} onChange={this.handleChange} onSubmit={this.submitTest} />
                 <label htmlFor="userSearch">Type City or Address</label>
                 <input type="submit" value="submit" onSubmit={this.submitTest} />
            </form>
      
            <button onClick={this.signIn}>Sign in</button>
            <button onClick={this.signOut}>Sign Out</button>
        </div>
    )
}
        submitTest() {
            console.log("test")
        }
}

export default Auth; 