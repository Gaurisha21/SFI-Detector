
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-analytics.js";
  import { getAuth } from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js'
  import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-firestore.js'
  import {FIREBASE_API_KEY,FIREBASE_AUTH_DOMAIN,FIREBASE_MEASUREMENT_ID,FIREBASE_APP_ID,FIREBASE_DATABASE_URL,FIREBASE_MESSAGING_SENDER_ID,FIREBASE_PROJECT_ID,FIREBASE_STORAGE_BUCKET} from './firebaseconfig.js'
  
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY || process.env.FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN || process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: FIREBASE_DATABASE_URL || process.env.FIREBASE_DATABASE_URL,
    projectId: FIREBASE_PROJECT_ID || process.env.FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET || process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID || process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID || process.env.FIREBASE_APP_ID,
    measurementId: FIREBASE_MEASUREMENT_ID || process.env.FIREBASE_MEASUREMENT_ID
  };

  if(firebaseConfig.apiKey) console.log("Firebase is connected!");

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export var collectionRef = collection(db, "washrooms_hygenie");
