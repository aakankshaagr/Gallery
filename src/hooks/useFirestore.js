import { query, onSnapshot, orderBy, collection } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "./../component/Firebase";

const useFirestore = (collect) => {
  const [docs, setDocs] = useState([]);
  useEffect(() => {
    const q = query(collection(db, collect), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (Snapshot) => {
      const documents = [];
      Snapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
      console.log("Current images ", documents);
    });
    //cleanup function : invoked when you want to unmount imagegrid
    return () => unsubscribe();
  }, [collect]);
  return { docs };
};
export default useFirestore;
