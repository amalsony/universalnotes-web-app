"use client";
import { useEffect, useState } from "react";

// Axios
import axios from "axios";

// Components
import Note from "@/components/note/Note";
import ErrorPageComponent from "@/components/general/ErrorPageComponent";

export default function MyNotes() {
  // States
  const [notes, setNotes] = useState<any>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch notes
  useEffect(() => {
    axios
      .get("http://localhost:8000/notes/get-notes", {
        withCredentials: true,
      })
      .then((res) => {
        setNotes(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.response.data.error);
        setLoading(false);
      });
  }, []);

  function Like(noteId: string) {
    axios
      .post(
        "http://localhost:8000/notes/like",
        {
          noteId,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        replaceNote(res.data.note);
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  }

  function Unlike(noteId: string) {
    axios
      .post(
        "http://localhost:8000/notes/unlike",
        {
          noteId,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        replaceNote(res.data.note);
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  }

  function Dislike(noteId: string) {
    axios
      .post(
        "http://localhost:8000/notes/dislike",
        {
          noteId,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        replaceNote(res.data.note);
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  }

  function Undislike(noteId: string) {
    axios
      .post(
        "http://localhost:8000/notes/undislike",
        {
          noteId,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        replaceNote(res.data.note);
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  }

  function DeleteNote(noteId: string) {
    axios
      .post(
        `http://localhost:8000/notes/delete-note`,
        {
          noteId,
        },
        {
          withCredentials: true,
        }
      )
      .then(() => {
        removeNote(noteId);
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  }

  function HideNote(noteId: string) {
    axios
      .post(
        `http://localhost:8000/notes/hide-note`,
        {
          noteId,
        },
        {
          withCredentials: true,
        }
      )
      .then(() => {
        removeNote(noteId);
      })
      .catch((err) => {
        setError(err.response.data.error);
      });
  }

  // Replace note
  function replaceNote(newNote: any) {
    setNotes((prevNotes: any) => {
      return prevNotes.map((note: any) => {
        if (note._id === newNote._id.toString()) {
          return newNote;
        }
        return note;
      });
    });
  }

  //   Remove note
  function removeNote(noteId: string) {
    setNotes((prevNotes: any) => {
      return prevNotes.filter((note: any) => note._id !== noteId);
    });
  }

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="mt-10">
        <h1 className="text-3xl font-bold text-white/90">My Notes</h1>
        <div className="mt-5">
          {loading ? (
            <p className="text-white/70 text-center">Loading...</p>
          ) : error ? (
            <ErrorPageComponent message={error} />
          ) : notes.length === 0 ? (
            <p className="text-white/70">
              Context you add to webpages will show up here.
            </p>
          ) : (
            <div className="flex flex-col mt-5">
              {notes.map((note: any) => (
                <div className="mb-5" key={note._id}>
                  <Note
                    note={note}
                    like={() => Like(note._id)}
                    unlike={() => Unlike(note._id)}
                    dislike={() => Dislike(note._id)}
                    undislike={() => Undislike(note._id)}
                    deleteNote={() => DeleteNote(note._id)}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
