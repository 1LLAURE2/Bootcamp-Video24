import { db } from "."
import { addDoc,collection,getDocs, setDoc,doc } from "firebase/firestore";

export const addTask=task=>{
    return addDoc(collection(db,'tasks'),task);
}

export const getTask=async ()=>{
    const querySnapshot = await getDocs(collection(db, "tasks"));
    const tasks=querySnapshot.docs.map(doc=>{
        return {...doc.data(),id:doc.id};
    });
    // console.log(task);
    // querySnapshot.forEach((doc) => {
    //     console.log(`${doc.id} => ${doc.data()}`);
    // });
    return tasks;
}

export const toggleComplete=(task)=>{
    return setDoc(doc(db,'tasks',task.id),{
        ...task,
        completed:!task.completed
    })
}