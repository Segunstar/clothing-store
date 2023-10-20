import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleuser = async () => {
        const {user} = await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user)
    }
    return ( 
        <div>
            <h1> Sign In page</h1>
            <button onClick={logGoogleuser}>sign in with google</button>
        </div>
     );
}
 
export default SignIn;