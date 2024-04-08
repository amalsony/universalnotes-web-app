import styles from "./Note.module.css";
import NoteBody from "./NoteBody";

// Assets
import Logo from "@/assets/SmallLogo";

// Components
import NoteFooter from "./NoteFooter";

// Utilities
import { getPostTime } from "@/utilities/getPostTime";

export default function Note({
  note,
  like,
  unlike,
  dislike,
  undislike,
  deleteNote,
  hideNote,
}: {
  note: any;
  like: any;
  unlike: any;
  dislike: any;
  undislike: any;
  deleteNote?: any;
  hideNote?: any;
}) {
  const niceURL = note ? getNiceURL(note) : null;

  function getNiceURL(note: any) {
    return note.url.domain + note.url.path.replace(/\/$/, "");
  }

  return (
    <div className={styles.universal_notes_popup_container}>
      <div className={styles.universal_notes_header}>
        <div className={styles.universal_notes_title_container}>
          <Logo width="22" height="22" color={""} />
          <h2 className={styles.universal_notes_title}>
            UniversalNotes Contributors added context
          </h2>
        </div>
        <p className={styles.note_header_time}>
          {getPostTime(note?.createdAt)}
        </p>
      </div>
      <div className={styles.universal_notes_content}>
        <div className={styles.header}>
          <a
            href={note?.url.full_url}
            target="_blank"
            className={styles.header_text_url_container}
          >
            <p className={styles.header_text_url}>
              {niceURL ? niceURL : "current page url"}
            </p>
          </a>
        </div>
        <div className={styles.universal_notes_text}>
          <NoteBody body={note?.body} />
        </div>
      </div>
      <NoteFooter
        note={note}
        like={like}
        unlike={unlike}
        dislike={dislike}
        undislike={undislike}
        deleteNote={deleteNote}
        hideNote={hideNote}
      />
    </div>
  );
}
