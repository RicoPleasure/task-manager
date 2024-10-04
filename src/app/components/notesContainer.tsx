import NoteBox from "./noteBox"

export default async function NotesContainer() {

    return (
        <div className="h-fit w-[100%] px-[70px] grid grid-cols-6 grid-rows-3 gap-2.5 place-items-center">
            <NoteBox />
            <NoteBox />
            <NoteBox />
            <NoteBox />
            <NoteBox />
            <NoteBox />
        </div>
    )
}