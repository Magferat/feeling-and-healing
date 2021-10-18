
import { useState } from "react";
import { useEffect } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../Firebase/Firebase.init";


initializeAuthentication();
const googleProvider = new GoogleAuthProvider();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const [error, setError] = useState('');

    const auth = getAuth()

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user);
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // const handleSubmission = e => {
    //     e.preventDefault();
    // }
    const handleUserName = e => {
        setName(e.target.value);

    }
    const handleUserEmail = e => {
        setEmail(e.target.value);

    }
    const handleUserPass = e => {
        setPassword(e.target.value);

    }

    const userRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                // setUser(user);
            })
            .catch(error => {
                setError(error.message);
            })


    }

    const signInManually = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                // setUser(user);
                // setError('');
            })
    }

    const toogleForLogin = e => {

        setIsLogin(e.target.checked);
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, [auth]);

    return {
        user,
        error,

        handleUserEmail,
        handleUserPass,
        handleUserName,
        userRegistration,
        signInUsingGoogle,
        signInManually,
        toogleForLogin,
        isLogin,
        logOut
    }
}

export default useFirebase;