import { useEffect, useState } from 'react'
import { getAuth, updateProfile, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, } from "firebase/auth";

import initializeAuthentication from '../Components/Firebase/Firebase.init'


initializeAuthentication()
const googleProvider = new GoogleAuthProvider();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const [isLoading, setIsLoading] = useState(true);



    const auth = getAuth();

    const handleUserEmail = e => {
        setEmail(e.target.value);
    }
    const handleUserPass = e => {
        // console.log(email, password);
        setPassword(e.target.value)


    }
    const userName = e => {
        setName(e.target.value);
        console.log(e.target.value);

    }


    const newUserCreate = e => {
        e.preventDefault();
        setIsLoading(true);
        if (!/((?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8})/.test(password)) {
            setError('Password have to fill up following conditions .')
            return;
        }
        else {
            createUserWithEmailAndPassword(auth, email, password)
                .then(result => {
                    // Signed in 
                    const user = result.user;
                    console.log(user);
                    setUser(user);
                    setUserName()

                })
                .catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage);

                })
                .finally(() => setIsLoading(false));
            setError('');
        }
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }

    const logInManually = () => {
        setError('');
        setIsLoading(true);
        //  redirect to disired page 

        return signInWithEmailAndPassword(auth, email, password)

            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => setIsLoading(false));

    }

    const googleLogIn = () => {
        setIsLoading(true);

        //  redirect to disired page 

        return signInWithPopup(auth, googleProvider)

            .finally(() => setIsLoading(false));


    }

    const logOut = () => {
        setIsLoading(true);

        signOut(auth)
            .then(() => {
                // Sign-out successful.
                setUser({});
            })

            .finally(() => setIsLoading(false));
    }

    // Observation 

    useEffect(() => {
        const unsubscribred = onAuthStateChanged(auth, user => {
            if (user) {

                setUser(user);

            }
            else {
                setUser({})
            }
            setIsLoading(false);
            return () => unsubscribred;
        });
    }, [auth]);


    return {
        user,
        logOut,
        isLoading,
        newUserCreate,
        userName, handleUserEmail, handleUserPass,
        logInManually,
        googleLogIn,
        error,
    }



}
export default useFirebase;