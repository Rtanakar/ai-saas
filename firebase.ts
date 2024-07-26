import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4Jef1PfPKIE-DcxUF-GfHMVoREfNHmFU",
  authDomain: "ai-saas-9a4ef.firebaseapp.com",
  projectId: "ai-saas-9a4ef",
  storageBucket: "ai-saas-9a4ef.appspot.com",
  messagingSenderId: "673416086426",
  appId: "1:673416086426:web:26fff93536a0cc55733023",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
