import firebase from "../Config/firebase";
import {collection,addDoc,getDocs, doc} from 'firebase/firestore'


export async function createToDo(userId,data){
    const subCollection = collection(firebase.firestore(), 'users', userId, 'toDos');
    await addDoc(subCollection, data);
}

export async function getToDos(userId){
    const val = doc(firebase.firestore(),'users',userId);
    const collectionVal = collection(val,"toDos")
    const toDos = await getDocs(collectionVal)
    const toDosList = toDos.docs.map((doc)=>({...doc.data(),id:doc.id}))
    return toDosList
}
