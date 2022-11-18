import { getFirestore, getDoc, setDoc, doc, updateDoc, increment, collection } from "firebase/firestore";

async function SetVoteCount(){
    const db = getFirestore();
    const totalRef = doc(db, "TOTAL", "COUNT");
    const totalSnap = await getDoc(totalRef);

    return (
        <div>
            {totalSnap.data()}
        </div>
    )
}

export default function VoteCount(){
    SetVoteCount();

    return(
        <>
        <SetVoteCount/>
        </>
    )
}
