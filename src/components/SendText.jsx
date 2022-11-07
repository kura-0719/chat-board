// import styles from "src/styles/Home.module.css";
// import { useCallback, useState } from "react";
// import { db } from "src/components/firebase";
// import firebase from "firebase/compat/app";

// const SendText = () => {
//   const handleNameChange = useCallback((e) => {
//     if (e.target.value.length < 1) {
//       alert("テキストを入れてください");
//       return;
//     }
//     setName(e.target.value.trim());
//   }, []);
//   const handleTextChange = useCallback((e) => {
//     if (e.target.value === "") {
//       alert("テキストを入れてください");
//       return;
//     }
//     setText(e.target.value.trim());
//   }, []);
//   const [inputName, setName] = useState("");
//   const [inputText, setText] = useState("");
//   function sendText(e) {
//     e.preventDefault();

//     db.collection("texts").add({
//       name: inputName,
//       text: inputText,
//       createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//     });

//     setName("");
//     setText("");
//   }

//   return (
//     <div className={styles.formContainer}>
//       <form onSubmit={sendText}>
//         <div className={styles.sendText}>
//           <input
//             className={styles.inputName}
//             placeholder="名前"
//             type="name"
//             onChange={handleNameChange}
//             value={inputName}
//           />
//           <input
//             className={styles.inputText}
//             placeholder="コメントする"
//             type="text"
//             onChange={handleTextChange}
//             value={inputText}
//           />
//           <button>投稿</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SendText;
