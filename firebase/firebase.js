export const firebase = {
    apiKey: process.env.FIREBASE_API_KEY || "AIzaSyA8rcCnmJsVw2eMNC53p2oVE1dGEYm9Muc",
    authDomain: process.env.FIREBASE_AUTH_DOMAIN || "dev-nomad.firebaseapp.com",
    projectId: process.env.FIREBASE_PROJECT_ID || "dev-nomad",
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET || "dev-nomad.firebasestorage.app",
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID || "724816279928",
    appId: process.env.FIREBASE_APP_ID || "1:724816279928:web:d39e8c89d8ba1e2102308d",
    measurementId: process.env.FIREBASE_MEASUREMENT_ID || "G-JB1VZTTTL9"
};

export default firebase;
