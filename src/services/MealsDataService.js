
import { getFirestore, doc, collection, getDocs, addDoc, deleteDoc, updateDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyCZdLfbCxmYkUA7AkNCZMEA9-6ZzIOyxiQ",
  authDomain: "foundation-pwa-vue.firebaseapp.com",
  databaseURL: "https://foundation-pwa-vue-default-rtdb.firebaseio.com",
  projectId: "foundation-pwa-vue",
  storageBucket: "foundation-pwa-vue.appspot.com",
  messagingSenderId: "1068488126025",
  appId: "1:1068488126025:web:843282705661a984e81998"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
class MealsDataService {
   async getAll() {
      const dataSnap = await getDocs(collection(db, "/meals"));
      return dataSnap
  }
  async create(meal) {
    try {
      const docRef = await addDoc(collection(db, "meals"), meal);
      if(docRef.id){
        return "Added new meal successfully"
      }
    } catch (err) {
      throw new Error("Failed to add new meal")
    }
  }

  async update(id, value) {
    const washingtonRef = doc(db, id, value);
    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
      capital: true
    });
  }

  async delete(id) {
    try{
      await deleteDoc(doc(db,'meals', id));
      console.log('waiting for deletion')
    }catch(error){
    }
  }
}
export default new MealsDataService();