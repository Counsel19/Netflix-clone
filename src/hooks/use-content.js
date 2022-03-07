import { useEffect, useState, useContext } from "react";
import { FirebaseContext } from "../context/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function useContent( target ) {

  const [content, setContent] = useState([]);
  const { db } = useContext(FirebaseContext);

  useEffect(() => {
    const collectionRef = collection(db, target);

    const getData = async () => {
      try {
        const snapshot = await getDocs(collectionRef);
        setContent(
          snapshot.docs.map((contentObj) => ({
            ...contentObj.data(),
            docId: contentObj.id,
          }))
        );
      } catch (e) {
        console.log(e.message);
      }
    };

    getData()

  }, []);

  return {[target]: content}; 
}
