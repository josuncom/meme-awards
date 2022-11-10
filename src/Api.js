import { collection, getFirestore, getDocs, addDoc, doc, getDoc, setDoc } from "firebase/firestore";
import { Cookies, useCookies } from "react-cookie";
import moment, { deprecationHandler } from "moment/moment";

export async function getData() {
    const db = getFirestore();
    const querySnapShot = await getDocs(collection(db, "meme-awards"));
    querySnapShot.forEach((doc) => {
        console.log(doc.data());
    })
}

// export async function setData() {
//     const ipData = await fetch('https://geolocation-db.com/json/'); // 위치 정보 조회
//     const locationIP = await ipData.json(); // 위치 정보에서 IP 주소 load
//     const IP = locationIP.IPv4;
//     const COOKIE_KEYS = 'isVoted';
//     const [cookies, setCookies] = useCookies([COOKIE_KEYS]);

//     // console.log(typeof(IP)); => string

//     const db = getFirestore();
//     const ipRef = doc(db, "IP", IP);
//     const ipSnap = await getDoc(ipRef); 

//     if (ipSnap.exists()) {
//         console.log("이미 있음!");
//       } else {
//         console.log(ipRef);
//         try {
//             await setDoc(ipRef, {
//                 IP : IP
//             });
//             console.log("Document written with ID: ", ipData.id);
//           } catch (e) {
//             console.error("Error adding document: ", e);
//           }
//     }
// }