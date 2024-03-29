import { initializeApp } from "firebase/app";
import { getAuth, sendSignInLinkToEmail } from "firebase/auth";
import { useState } from "react";
import {app} from  '../utils/firebase'
const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: "https://localhost:3000",
  // This must be true.
  handleCodeInApp: true,
};


export const SignIn = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  async function onSignIn() {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem("emailForSignIn", email);
        alert("sent email");
        // ...
      })
      .catch((error) => {
        alert("email not sent catch some error");
        const errorCode = error.code;
        const errorMessage = error.message;
        // ...
      });
  }
  return (
    <div>
      <input
        type="text"
        value={email}
        placeholder={"email"}
        onChange={(e) => setEmail(e.target?.value)}
      >
        Email
      </input>
      <button onClick={() => onSignIn()}> Sign Up</button>
    </div>
  );
};
