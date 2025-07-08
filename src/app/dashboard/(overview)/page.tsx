"use client";

import { NoteEntity } from "@/app/lib/definitions";
import Note from "@/app/ui/note";
import { useEffect, useState } from "react";

export default function Page() {
  const [notes, setNotes] = useState<NoteEntity[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
        // wrap in try catch later
        const response = await fetch("http://localhost:5009/api/Notes");
        const data = await response.json();
        setNotes(data);
    }

    fetchNotes();
  }, []);

  console.log(notes);

  return (
    <div className="">
      <main className="">
        <div className="flex">
          {notes.map((note) => (
            <Note key={note.id} title={note.title} noteItems={note.noteItems} />
          ))}
        </div>
      </main>
      <footer className=""></footer>
    </div>
  );
}
