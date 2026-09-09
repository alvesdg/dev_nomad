
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA4aCv4fnLEDYRfPMCSyoTQ1nuj4rokLok",
  authDomain: "dev-nomad-ga.firebaseapp.com",
  projectId: "dev-nomad-ga",
  storageBucket: "dev-nomad-ga.firebasestorage.app",
  messagingSenderId: "441764972201",
  appId: "1:441764972201:web:93a690917de65177cfcbb8",
  measurementId: "G-2ZW2VERQTZ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);