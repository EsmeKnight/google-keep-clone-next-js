import { redirect } from "next/navigation";
import {NoteEntity, NoteItem} from "../app/lib/definitions";
import Note from "./ui/note";

// check if logged in

export default function Page() {
  // call api that returns list of notes here

  let isLoggedIn = true; // api call for this
  let userUID = ""; // api call for this too
  if (isLoggedIn){
    redirect(`/dashboard/${userUID}`);
  }

  // render login page
  var notes: NoteEntity[];
  var noteItems: NoteItem[];
  noteItems = [{id: "1item", completed: false, text: "first"}, {id: "2item", completed: true, text: "second"}]
  notes = [{id: "1note", user_id: "1user", title: "test", data: noteItems }, {id: "2note", user_id: "1user", title: "test2", data: noteItems }];

  return (
    <div className="">
      <main className="">
        <div className="flex">
        {notes.map(note => (
          <Note key={note.id} title={note.title} noteItems={note.data}/>
        ))}
        </div>
      </main>
      <footer className="">
      </footer>
    </div>
  );
}
