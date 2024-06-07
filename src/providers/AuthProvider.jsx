import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [role, setRole] = useState(null); // New state for role

    const provider = new GoogleAuthProvider();

    const fetchUserRole = async (email) => {
        try {
            const response = await fetch("https://b9a12-assetguard-server.vercel.app/users");
            const users = await response.json();
            const currentUser = users.find(u => u.email === email);
            setRole(currentUser ? currentUser.role : null);
        } catch (error) {
            console.error("Failed to fetch user role:", error);
        }
    };

    const createUser = async (name, email, photo, password) => {
        setLoading(true);
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            await updateProfile(user, {
                displayName: name,
                photoURL: photo
            });
            setUser(user);
            await fetchUserRole(email);
            return userCredential;
        } catch (error) {
            setLoading(false);
            throw error;
        }
    };

    const signInGoogle = async () => {
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, provider);
            setUser(result.user);
            await fetchUserRole(result.user.email);
        } finally {
            setLoading(false);
        }
    };

    const signIn = async (email, password) => {
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            setUser(userCredential.user);
            await fetchUserRole(email);
        } finally {
            setLoading(false);
        }
    };

    const logOut = async () => {
        setLoading(true);
        try {
            await signOut(auth);
            setUser(null);
            setRole(null);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async currentUser => {
            setUser(currentUser);
            setLoading(true);
            if (currentUser?.email) {
                await fetchUserRole(currentUser?.email);
                setLoading(false);
            
            }
            else{
                setLoading(false);
                setUser(null);
            }
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        logOut,
        signIn,
        signInGoogle,
        role, 
        setUser 
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
