import firebase from '../Config/firebase';



export async function registerUser(data){
    const responseUser = await firebase.auth().createUserWithEmailAndPassword(data.email,data.password);
    if (responseUser.user.uid){
        const document = await firebase.firestore().collection("users").add({
            userId: responseUser.user.uid,
            name: data.name,
            lastName: data.lastName,
            d_birth: data.birth,
            toDoList: []
            
        })
        return document
    }


}
