'use client';

import { useState, useEffect } from "react"
import NoteBox from "./noteBox"

export default function TakeNote() {
    const gridStyles = "h-fit w-[100%] px-[70px] grid grid-cols-6 grid-rows-3 gap-2.5 place-items-center"

    const [titleInput, setTitleInput] = useState("");
    const [noteInput, setNoteInput] = useState("");

    const [notes, setNotes] = useState<{ titleInput: string; noteInput: string }[]>([]);

    const createNote = () => {
        const newNotes = [...notes, { titleInput, noteInput }];
        setNotes([...notes, { titleInput, noteInput }]);
        localStorage.setItem("notes", JSON.stringify(newNotes)); // Save notes to local storage
        setTitleInput("");  // Reset title input field
        setNoteInput("");   // Reset note input field
    };

    const removeNote = (index: number) => {
        const newNotes = notes.filter((_, i) => i !== index);
        setNotes(newNotes);
        localStorage.setItem("notes", JSON.stringify(newNotes)); // Update local storage
    };

    useEffect(() => {
        const savedNotes = localStorage.getItem("notes");
        if (savedNotes) {
            setNotes(JSON.parse(savedNotes)); // Load saved notes from local storage
        }
    }, []); 

    return (
        <>
            <div className="h-[200px] w-full flex place-content-center place-items-center mt-[20px]">
                <div className="flex flex-col w-[300px]">
                    {/* Controlled input fields */}
                    <input
                        value={titleInput}
                        onChange={(e) => setTitleInput(e.target.value)}
                        type="text"
                        placeholder="Enter title"
                        className="h-[40px] w-[300px] text-[var(--primary)] mb-[5px] outline-none p-[5px] pl-[15px]"
                    />
                    <textarea
                        value={noteInput}
                        onChange={(e) => setNoteInput(e.target.value)}
                        placeholder="Enter note"
                        className="min-h-[40px] h-fit w-[300px] text-[var(--primary)] mb-[5px] outline-none p-[5px] pl-[15px]"
                    />
                    <button
                        onClick={createNote}
                        className="h-[50px] border-[1px] rounded-[20px]"
                    >
                        Create Note
                    </button>
                </div>
            </div>
            <div id="notesContainer" className={gridStyles}>
                {/* Render notes */}
                {notes.map((note, index) => (
                    <NoteBox 
                        key={index} 
                        title={note.titleInput} 
                        note={note.noteInput} 
                        onDelete={() => removeNote(index)} // Pass the removeNote function
                    />
                ))}
            </div>
        </>
    )
}
