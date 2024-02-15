import styles from "./NoteFooter.module.css";
import Dislike from "@/assets/Dislike";
import Like from "@/assets/Like";

export default function NoteFooter({
  note,
  like,
  unlike,
  dislike,
  undislike,
}: {
  note: any;
  like: any;
  unlike: any;
  dislike: any;
  undislike: any;
}) {
  function handleLike() {
    note?.isLiked ? unlike() : like();
  }

  function handleDislike() {
    note?.isDisliked ? undislike() : dislike();
  }

  return (
    <div className={styles.note_footer_container}>
      <div className={styles.note_footer_container_left}>
        <p className={styles.note_footer_title}>Is this note helpful?</p>
      </div>
      <div className={styles.note_footer_container_right}>
        <div className="flex justify-center items-center">
          <button
            className={`${styles.note_footer_button} ${
              note?.isLiked ? styles.note_liked_button : ""
            }`}
            onClick={handleLike}
          >
            <Like height="14" width="14" color="#fc035a" />
          </button>
          <p className="ml-1.5 text-sm font-bold text-gray-500">
            {note?.like_count}
          </p>
        </div>
        <div className="flex justify-center items-center">
          <button
            className={`${styles.note_footer_button} ${
              note?.isDisliked ? styles.note_disliked_button : ""
            }`}
            onClick={handleDislike}
          >
            <Dislike height="14" width="14" color="#4285F4" />
          </button>
          <p className="ml-1.5 text-sm font-bold text-gray-500">
            {note?.dislike_count}
          </p>
        </div>
      </div>
    </div>
  );
}
