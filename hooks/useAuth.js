import { useEffect, useState } from "react";
import { auth, signInAnonymously, onAuthStateChanged } from '../utils/firebaseConfig';

export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        signInAnonymously(auth)
          .then((result) => setUser(result.user))
          .catch((error) => console.error("Auth error:", error));
      }
    });

    return () => unsubscribe();
  }, []);

  return user;
}
