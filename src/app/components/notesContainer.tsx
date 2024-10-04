import NoteBox from "./noteBox"

export default async function NotesContainer() {
    return (
        <>
            <div className="h-[100%] w-[100%]">
                <NoteBox />
                <NoteBox />
                <NoteBox />
                <NoteBox />
                <NoteBox />
                <NoteBox />
            </div>
        </>
    )
}