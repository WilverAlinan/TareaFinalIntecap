
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; //Obtiene la base de datos en tiempo real


function FirebaseConfig(){
  const firebaseConfig = {
    apiKey: "AIzaSyCynT1kNDgzUlGF9g8GzA0knqXlehkBeKg",
    authDomain: "crud-colegio2023.firebaseapp.com",
    databaseURL: "https://crud-colegio2023-default-rtdb.firebaseio.com",
    projectId: "crud-colegio2023",
    storageBucket: "crud-colegio2023.appspot.com",
    messagingSenderId: "72579530462",
    appId: "1:72579530462:web:f0f72dc22d29d346034c4f",
    measurementId: "G-GETLVTECWS"
  };
  const app = initializeApp(firebaseConfig);
return getDatabase(app);

}

export default FirebaseConfig;
