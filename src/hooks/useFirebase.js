import { useEffect, useState } from 'react';
import initializeFirebase from '../Components/FireBase/Firebase.init';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, sendEmailVerification, updateProfile, signOut } from "firebase/auth";



//initialize the Firebase App
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [admin, setAdmin] = useState(false);

  const auth = getAuth();


  const registerUser = (email, password, name, history) => {
    setIsLoading(true)

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setError('');
        const newUser = { email, displayName: name };
        setUser(newUser);
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {

        }).catch((error) => {

        });
        history.replace("/");
        verifyMail();
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  const verifyMail = () => {
    sendEmailVerification(auth.currentUser)
      .then(result => {
        console.log(result);
      })
  }


  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const path = location?.state?.from || '/';
        history.replace(path);
        setError('')
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  }

  //Observe User
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser({})
      }
      setIsLoading(false);

    });
    return () => unSubscribe;
  }, [auth])


  useEffect(() => {
    fetch(`http://localhost:5000/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
  }, [user.email])



  const logOut = () => {
    setIsLoading(true);
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    })
      .finally(() => setIsLoading(false));

  }
  return {
    user,
    admin,
    isLoading,
    error,
    registerUser,
    loginUser,
    logOut,



  }
};

export default useFirebase;