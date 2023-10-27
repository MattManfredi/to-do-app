import firebase from "../Config/firebase";
import {collection,addDoc,getDocs, doc,updateDoc,deleteDoc } from 'firebase/firestore'


export async function createToDo(userId,data){
    const subCollection = collection(firebase.firestore(), 'users', userId, 'toDos');
    await addDoc(subCollection, data);
}

const comparePriority = (a,b) =>{
    const prioridades = ['alta','media','baja'];
    const priorityA = prioridades.indexOf(a.priority);
    const priorityB = prioridades.indexOf(b.priority);
    return priorityA-priorityB;
}
export async function getToDos(userId){
    const val = doc(firebase.firestore(),'users',userId);
    const collectionVal = collection(val,"toDos")
    const toDos = await getDocs(collectionVal)
    const toDosList = toDos.docs.map((doc)=>({...doc.data(),id:doc.id}))
    const splitData = toDosList.reduce((result, item) => {
        if (item.accomplished) {
          result.completed.push(item);
        } else {
          result.notCompleted.push(item);
        }
        return result;
      }, { completed: [], notCompleted: [] });
      splitData.completed.sort(comparePriority);
      splitData.notCompleted.sort(comparePriority);
    return splitData
}

export async function modifyTodo(userId,todoId,data) {
  const userDocRef = doc(firebase.firestore(), 'users', userId,'toDos',todoId);
  await updateDoc(userDocRef, {
      accomplished: data
  });
}

export async function deleteTodo(userId,todoId){
    await deleteDoc(doc(firebase.firestore(), 'users', userId,'toDos',todoId))
}

  