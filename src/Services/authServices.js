import firebase from '../Config/firebase';
import { setDoc,doc} from 'firebase/firestore';




export async function registerUser(data){
    const responseUser = await firebase.auth().createUserWithEmailAndPassword(data.email,data.password);
    if (responseUser.user.uid){
        const user = {
            userId: responseUser.user.uid,
            name: data.name,
            lastName: data.lastName,
            d_birth: data.birth
        }
        await setDoc(doc(firebase.firestore(),'users',`${responseUser.user.uid}`),user)
    }
}




export async function logIn(data){
    const responseUser = await firebase
        .auth()
        .signInWithEmailAndPassword(data.email,data.password);
        if(responseUser.user.uid){
            const document = await firebase
                .firestore()
                .collection("users")
                .where("userId", "==",responseUser.user.uid)
                .get();
            return document.docs[0].data();
        }
    return {};
}