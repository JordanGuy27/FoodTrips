import React from 'react';
import ReactDOM from 'react-dom';
import AxiosReq from './axiosReq';


class Auth extends React.Component {
    constructor() {
        super();
        this.state = {
            loggedIn: false,
            user: {},
            userText: ''
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