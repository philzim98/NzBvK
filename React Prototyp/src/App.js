import React, {useState, useEffect} from "react";
import {initializeApp} from "firebase/app";

import PagePicker from "./components/molecules/PagePicker";

let app = null;

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

if (
  firebaseConfig.apiKey &&
  firebaseConfig.authDomain &&
  firebaseConfig.databaseURL &&
  firebaseConfig.projectId &&
  firebaseConfig.storageBucket &&
  firebaseConfig.messagingSenderId &&
  firebaseConfig.appId
) {
  app = initializeApp(firebaseConfig);
}

export {app};

function App() {
  const [isEmailing, setIsEmailing] = useState(false);

  useEffect(() => {
    const warnungBeiNeuladen = event => {
      if (!isEmailing) {
        event.preventDefault();
        event.returnValue = "";
        return "";
      }
    };

    window.addEventListener("beforeunload", warnungBeiNeuladen);

    return () => {
      window.removeEventListener("beforeunload", warnungBeiNeuladen);
    };
  }, [isEmailing]);

  const sendEmail = mailtoLink => {
    setIsEmailing(true);

    setTimeout(() => {
      window.location.href = mailtoLink;
      setIsEmailing(false);
    }, 100);
  };

  const isDone = () => {
    setIsEmailing(true);
  };

  return <PagePicker sendEmailto={sendEmail} isDone={isDone} />;
}

export default App;
