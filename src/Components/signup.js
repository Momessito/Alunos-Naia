// src/Signup.js
import React, { useRef } from 'react';
import { auth } from './firebase';

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input type="email" ref={emailRef} placeholder="Email" />
        <input type="password" ref={passwordRef} placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
