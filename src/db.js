require("dotenv").config();

import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID
};
firebase.initializeApp(config);

const firestoreapp = firebase.firestore();
const settings = { timestampsInSnapshots: true };
firestoreapp.settings(settings);

export { firestoreapp };
