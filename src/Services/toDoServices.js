import firebase from "../Config/firebase"

export async function create(todo){
    return await firebase.firestore().collection("tasks").add(todo)
}