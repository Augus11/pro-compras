import firebase from "firebase";

class Fire {
    constructor() {
        this.init()
        this.checkAuth()
    }

    init = () => {
        if (!firebase.apps.lenght) {
            firebase.initializeApp({
                apiKey: "AIzaSyAHIYXiWMlKrLeX4WFb7mJ_DkvKGLeUVoI",
                authDomain: "pro-compras.firebaseapp.com",
                databaseURL: "https://pro-compras-default-rtdb.firebaseio.com",
                projectId: "pro-compras",
                storageBucket: "pro-compras.appspot.com",
                messagingSenderId: "1031422305870",
                appId: "1:1031422305870:web:799882862d75404108051f",
                measurementId: "G-1V8H399FJX"                
            })
        }
    };

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(!user) {
                firebase.auth().signInAnonymously();
            }
        });
    };

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                linestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }

            this.db.push(message)
        }) 
        
    }

    parse = message => {
        const {user, text, timestamp} = message.val()
        const {key: _id} = message
        const createdAt = new Date(timestamp)

        return {
            _id,
            createdAt,
            text,
            user,
        };
    };

    get = callback => {
        this.db.on("child_added", snapshot => callback(this.parse(snapshot)));
    };

    off() {
        this.db.off()
    }

    get db() {
        return firebase.database().ref("messages");
    }

    get vid() {
        return (firebase.auth().currentUser || {}).uid
    }
}

export default new fire();
