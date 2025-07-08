"use client";

import { NoteItem } from "../lib/definitions";

export default function Note({
  title,
  noteItems,
}: {
  title: string;
  noteItems: NoteItem[];
}) {
  const handleClick = (item: NoteItem) => {
    console.log(item.text);
  };
  return (
    <div className="flex flex-col bg-amber-300 m-3.5 md:w-65 min-h-45 p-5 rounded-2xl">
      <div className="">
        <h2 className="text-2xl">{title}</h2>
      </div>
      <div className="h-full content-between flex flex-col justify-between">
        <ul>
          {noteItems.map((item) =>
            item.completed ? (
              <div key={item.id} className="flex">
                <div className="border w-2.5 h-2.5 self-center"></div>
                <li
                  className="text-base pl-3"
                  onClick={() => handleClick(item)}
                >
                  {item.text}
                </li>
              </div>
            ) : null
          )}
        </ul>
        <ul>
          {noteItems.map((item) =>
            !item.completed ? (
              <div key={item.id} className="flex">
                <div className="border w-2.5 h-2.5 self-center"></div>
                <li className="text-base pl-3 line-through">{item.text}</li>
              </div>
            ) : null
          )}
        </ul>
      </div>
    </div>
  );
}
