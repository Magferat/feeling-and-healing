import { useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, } from "firebase/auth";

import initializeAuthentication from '../Components/Firebase/Firebase.init'


initializeAuthentication()
const googleProvider = new GoogleAuthProvider();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);



    const auth = getAuth();

    const handleUserEmail = e => {
        setEmail(e.target.value);
    }
    const handleUserPass = e => {
        setPassword(e.target.value);
    }
    const newUserCreate = e => {
        e.preventDefault();
        setIsLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // Signed in 
                const user = result.user;
                console.log(user);
                setUser(user);

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);

            })
            .finally(() => setIsLoading(false));


    }
    const logInManually = e => {
        e.preventDefault();
        setIsLoading(true);

        return signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                // Signed in 
                const user = result.user;
                console.log(user);
                setUser(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })
            .finally(() => setIsLoading(false));
    }

    const googleLogIn = () => {
        setIsLoading(true);

        return signInWithPopup(auth, googleProvider)
            // .then(result => {

            //     const user = result.user;
            //     setUser(user);
            //     console.log(user)
            //     // ...
            // }).catch((error) => {

            //     const errorCode = error.code;
            //     const errorMessage = error.message;
            //     console.log(errorCode, errorMessage);

            // })
            .finally(() => setIsLoading(false));


    }

    const logOut = () => {
        setIsLoading(true);

        signOut(auth)
            .then(() => {
                // Sign-out successful.
                setUser({});
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setUser(user);
                // ...
            }
        });
    }, [auth]);
    return {
        user,
        logOut,
        isLoading,
        newUserCreate, handleUserEmail, handleUserPass,
        logInManually,
        googleLogIn
    }



}
export default useFirebase;