import { useState, useEffect } from "react";
import { storage, db } from "../component/Firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { serverTimestamp, collection, addDoc } from "firebase/firestore";
const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  useEffect(() => {
    //Logic for storing upload
    //references
    const storageRef = ref(storage, file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    const collectionRef = collection(db, "images");

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const prog = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(prog);
        console.log("Upload is " + prog + "% done");
      },
      (error) => {
        // Handle unsuccessful uploads
        setError(error);
      },
      async () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setUrl(downloadURL);
          try {
            const docRef = addDoc(collectionRef, {
              url: downloadURL,
              createdAt: serverTimestamp(),
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
          //collectionRef.add({ url: downloadURL, createdAt: serverTimestamp() });
        });
      }
    );
    /* uploadBytes(storageRef, file).then((snapshot) => {
        let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadUrl();
        setUrl(url);
      }
    );
  */
  }, [file]);
  return { progress, url };
};
export default useStorage;
