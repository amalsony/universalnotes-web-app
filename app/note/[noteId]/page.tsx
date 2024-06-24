"use client";
import { useEffect, useState } from "react";

// Axios
import axios from "axios";

// Styling
import styles from "./page.module.css";

// Navigation
import { useRouter, useSearchParams } from "next/navigation";

// Components
import Note from "@/components/note/Note";
import ErrorPageComponent from "@/components/general/ErrorPageComponent";

export default function NotePage({ params }: { params: { noteId: string } }) {
  // Router
  const router = useRouter();

  const searchParams = useSearchParams();
  const paramAction = searchParams.get("action");

  const [action, setAction] = useState<any>("");
  const [error, setError] = useState<string>("");

  const [isDeleted, setIsDeleted] = useState<boolean>(false);
  const [note, setNote] = useState<any>(null);

  function Like() {
    axios
      .post(
        "http://localhost:8000/notes/like",
        {
          noteId: params.noteId,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setNote(res.data.note);
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  }

  function Unlike() {
    axios
      .post(
        "http://localhost:8000/notes/unlike",
        {
          noteId: params.noteId,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setNote(res.data.note);
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  }

  function Dislike() {
    axios
      .post(
        "http://localhost:8000/notes/dislike",
        {
          noteId: params.noteId,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setNote(res.data.note);
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  }

  function Undislike() {
    axios
      .post(
        "http://localhost:8000/notes/undislike",
        {
          noteId: params.noteId,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setNote(res.data.note);
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  }

  function DeleteNote() {
    axios
      .post(
        `http://localhost:8000/notes/delete-note`,
        {
          noteId: params.noteId,
        },
        {
          withCredentials: true,
        }
      )
      .then(() => {
        setIsDeleted(true);
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  }

  useEffect(() => {
    setAction(paramAction);
    if (action === "like") {
      Like();
      router.push(`/note/${params.noteId}`);
    } else if (action === "dislike") {
      Dislike();
      router.push(`/note/${params.noteId}`);
    } else if (action === "delete") {
      DeleteNote();
      router.push(`/note/${params.noteId}`);
    }
  }, [action]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:8000/notes/show-note?noteId=${params.noteId}`,
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        setNote(res.data.note);
        console.log(res.data.note);
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  }, []);

  return (
    <div className="flex flex-col bg-gradient-to-b from-gray-900 to-slate-950 justify-center items-center bg-white min-h-screen z-[-4]">
      <div className="w-full max-w-xl">
        {error ? (
          <ErrorPageComponent message={error} />
        ) : (
          <>
            {isDeleted && (
              <div className="flex flex-col justify-center items-center px-2 text-white/90 text-2xl mb-10">
                <h2 className="font-bold text-center">
                  This note has been deleted
                </h2>
              </div>
            )}
            <Note
              note={note}
              like={Like}
              unlike={Unlike}
              dislike={Dislike}
              undislike={Undislike}
            />
            {isDeleted && (
              <div className="flex flex-col justify-center items-center px-2 text-white/90 text-2xl mt-10">
                <p className="text-white/80 text-xl mt-4 text-center">
                  You may now close this tab
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
