'use client';
import { useState, useEffect } from 'react';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [signupSuccess, setSignupSuccess] = useState(false); // State variable for signup success

  useEffect(() => {
    // Load and initialize the Google Sign-In API once the component mounts
    loadGoogleSignInApi();
  }, []);

  const loadGoogleSignInApi = () => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.async = true;
    script.defer = true;
    script.onload = handleGoogleApiLoad;
    document.head.appendChild(script);
  };

  const handleGoogleApiLoad = () => {
    // Initialize the Google Sign-In API
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: 'YOUR_GOOGLE_CLIENT_ID',
      });
    });
  };

  // Handle Google Signup
  const handleGoogleSignup = async () => {
    try {
      // Open Google Sign-In popup
      const googleUser = await window.gapi.auth2.getAuthInstance().signIn();

      // Get user details
      const profile = googleUser.getBasicProfile();
      const googleEmail = profile.getEmail();
      const googleName = profile.getName();

      // Set the email and name to the state
      setEmail(googleEmail);
      setName(googleName);

      // Call your backend API endpoint to handle Google sign-in
      const response = await fetch("http://localhost:8080/google/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: googleEmail, name: googleName }),
      });

      if (!response.ok) {
        throw new Error("Failed to sign in with Google");
      }

      // Get the JWT token from the response and store it securely (e.g., in a cookie or local storage)
      const data = await response.json();
      console.log("Google Sign-in successful. JWT token:", data.token);

      // Update the state to indicate signup success
      setSignupSuccess(true);

      // You can optionally redirect to a success page here:
      // window.location.href = "/success";
    } catch (error) {
      console.error("Failed to sign in with Google:", error);
      setError("Failed to sign in with Google");
    }
  };

  const handleSignup = async () => {
    if (!name || !email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to register user");
      }

      const data = await response.json();
      console.log("User registered successfully:", data);

      // Update the state to indicate signup success
      setSignupSuccess(true);

      // You can optionally redirect to a success page here:
      // window.location.href = "/success";
    } catch (error) {
      console.error("Failed to register user:", error.message);
      setError(error.message);
    }
  };

  // Conditional rendering based on signup success
  return (
    <div>
      {signupSuccess ? (
        <p>Signup successful. Thank you!</p>
      ) : (
        <div>
          <h1>Signup</h1>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button onClick={handleSignup}>Signup</button>
          <br />
          <button onClick={handleGoogleSignup}>Signup with Google</button>
          {error && <p>{error}</p>}
        </div>
      )}
    </div>
  );
};

export default Signup;

