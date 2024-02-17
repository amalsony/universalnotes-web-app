"use client";
import { useEffect, useState } from "react";

// Axios
import axios from "axios";

// Styling
import styles from "./page.module.css";

// Navigation
import { useRouter, useSearchParams } from "next/navigation";

// Components
import NoteBody from "@/components/note/NoteBody";
import Note from "@/components/note/Note";

export default function NotePage({ params }: { params: { noteId: string } }) {
  // Router
  const router = useRouter();

  const searchParams = useSearchParams();
  const action = searchParams.get("action");

  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isDisliked, setIsDisliked] = useState<boolean>(false);

  const [note, setNote] = useState<any>(null);

  function Like() {
    axios
      .post("https://api.universalnotes.org/notes/like", {
        noteId: params.noteId,
      })
      .then((res) => {
        setNote(res.data.note);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  function Unlike() {
    axios
      .post("https://api.universalnotes.org/notes/unlike", {
        noteId: params.noteId,
      })
      .then((res) => {
        setNote(res.data.note);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  function Dislike() {
    axios
      .post("https://api.universalnotes.org/notes/dislike", {
        noteId: params.noteId,
      })
      .then((res) => {
        setNote(res.data.note);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  function Undislike() {
    axios
      .post("https://api.universalnotes.org/notes/undislike", {
        noteId: params.noteId,
      })
      .then((res) => {
        setNote(res.data.note);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  useEffect(() => {
    if (action === "like") {
      router.push(`/note/${params.noteId}`);
      Like();
    } else if (action === "dislike") {
      router.push(`/note/${params.noteId}`);
      Dislike();
    }
  }, [action]);

  useEffect(() => {
    axios
      .get(
        `https://api.universalnotes.org/notes/show-note?noteId=${params.noteId}`
      )
      .then((res) => {
        setNote(res.data.note);
        console.log(res.data.note);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-white min-h-screen z-[-4]">
      <div className="w-full max-w-xl">
        <Note
          note={note}
          like={Like}
          unlike={Unlike}
          dislike={Dislike}
          undislike={Undislike}
        />
      </div>
    </div>
  );
}
