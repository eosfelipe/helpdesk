// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBBdGCCF1VNz_eRipJ21pIXtqmTxt1Gf-0',
  authDomain: 'helpdesk-cedis.firebaseapp.com',
  projectId: 'helpdesk-cedis',
  storageBucket: 'helpdesk-cedis.appspot.com',
  messagingSenderId: '1077801434888',
  appId: '1:1077801434888:web:b37a378a1c10c6c1ddb6bd'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
