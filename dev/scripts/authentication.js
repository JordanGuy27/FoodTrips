import React from 'react';

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
        this.handleChange = this.handleChange.bind(this);
        this.addRest = this.addRest.bind(this);
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
    render() {
    return (
        <div>
            <input type="text" id="userText" value={this.state.userText} onChange={this.handleChange}/>
            <label htmlFor="userSearch">Type City or Address</label>
            <button onClick={this.signIn}>Sign in</button>
            <button onClick={this.signOut}>Sign Out</button>
        </div>
    )
}
}

export default Auth; 