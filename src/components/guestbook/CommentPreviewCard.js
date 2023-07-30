// firebase
import { deleteDoc, doc } from "firebase/firestore";

import classes from "./CommentPreviewCard.module.css";

function CommentPreviewCard({ id, content, db }) {
  const deleteComment = async () => {
    try {
      const confirmDelete = window.prompt("관리자 코드: ");
      if (confirmDelete == "0707") {
        const documentRef = doc(db, "comments", id);
        await deleteDoc(documentRef);
        window.location.reload();
      } else {
        alert("틀렸습니다.");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={classes["comment-card"]}>
      <div className={classes["comment-text"]}>{content}</div>
      <button
        className={classes["delete-button"]}
        onClick={() => deleteComment()}
      />
    </div>
  );
}

export default CommentPreviewCard;
