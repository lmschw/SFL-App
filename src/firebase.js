import app from 'firebase/app';
import 'firebase/auth'
import 'firebase/firebase-firestore';

  const firebaseConfig = {
    apiKey: "AIzaSyByZUxPYr_PIOiVMl8ABSdtqqBpziXEiLU",
    authDomain: "sfl-app-6a945.firebaseapp.com",
    databaseURL: "https://sfl-app-6a945.firebaseio.com",
    projectId: "sfl-app-a2cc5",
    storageBucket: "",
    messagingSenderId: "920257089385",
  };



  class Firebase {
    constructor(){
      app.initializeApp(firebaseConfig)
      this.auth = app.auth()
      this.db = app.firestore()
    }

    login(email,password){
      return this.auth.signInWithEmailAndPassword(email,password)
    }

    logout(){
      return this.auth.signOut()
    }

    async register(FName,LName, email,password) {
      await this.auth.createUserWithEmailAndPassword(email,password)
      return this.auth.currentUser.updateProfile({
        displayName:FName
      })
    }

    isInitialized(){
        return new Promise(resolve => {
          this.auth.onAuthStateChanged(resolve)
        })
    }

    getCurrentUsername(){
      return this.auth.currentUser && this.auth.currentUser.displayName
    }
  }


  export default new Firebase()