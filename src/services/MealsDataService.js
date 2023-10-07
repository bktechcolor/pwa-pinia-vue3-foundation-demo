
import { getFirestore, doc, collection, getDocs, query, where, getDoc, addDoc, deleteDoc, updateDoc } from "firebase/firestore"; 
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
   async getAllMealAsync() {
      const napshot= await getDocs(collection(db, "meals"));
      return napshot.docs.map(doc => doc.data())
  }
  async getDocumentByQuery(idMeal){
    console.log('starting query in firebase')
    const q = query(collection(db, "meals"), where("idMeal", "==",idMeal));
    const dataQuerySnapshot = await getDocs(q);
    dataQuerySnapshot.forEach(async (documentId) => {
      await getDoc(doc(db, 'meals', documentId.id)).then(res=> {
        console.log(res.data())
        return res.data()
      })
    });
  }
  async getDocumentById(idDocument){
    const snap = await getDoc(doc(db, 'meals', idDocument))
    if (snap.exists()) {
      return snap.data()
    }
    else {
      console.log("No such document")
    } 
  }

  async addMealAsync(mealObject) {
    try {
      const docRef = await addDoc(collection(db, "meals"), mealObject);
      if(docRef.id){
        return "Added new meal successfully"
      }
    } catch (err) {
      throw new Error("Failed to add new meal")
    }
  }

  async update(idDocument, collectName) {
    const washingtonRef = doc(db, idDocument, collectName);
    // Set the "capital" field of the city 'DC'
    await updateDoc(washingtonRef, {
      capital: true
    });
  }

  async deleteMealAsync(idDocument) {
    try{
      await deleteDoc(doc(db,'meals', idDocument));
      console.log('waiting for deletion')
    }catch(error){
    }
  }
}
export default new MealsDataService();