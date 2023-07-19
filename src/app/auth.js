'use client';
import firebase from "./firebase";
import { useState } from "react";

function Auth() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                // Save the user's name to the Firebase Realtime Database
                firebase
                    .database()
                    .ref(`users/${user.uid}`)
                    .set({
                        name: name,
                    })
                    .then(() => {
                        console.log("Signed up and saved name to the database:", user);
                    })
                    .catch((error) => {
                        console.error("Error saving name to the database:", error);
                    });
            })
            .catch((error) => {
                console.error("Sign-up error:", error);
            });
    };

    const handleLogin = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Logged in:", user);
            })
            .catch((error) => {
                console.error("Login error:", error);
            });
    };

    const handleLogout = () => {
        firebase
            .auth()
            .signOut()
            .then(() => {
                console.log("Logged out");
            })
            .catch((error) => {
                console.error("Logout error:", error);
            });
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleSignUp}>Sign Up</button>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}
export default Auth;
