interface NoteBoxProps {
    key: number;
    title: string;
    note: string;
    onDelete: () => void;
}

const NoteBox: React.FC<NoteBoxProps> = ({ key, title, note, onDelete }) => {
    return (
        console.log(key),
        <div className="h-fit min-h-[260px] w-[240px] bg-[var(--secondary)] rounded-[10px] relative">
            <div className="h-[10%] flex place-items-center py-[10px] px-[20px]">
                <h1 className="text-[var(--primary)] text-[1.1rem]">{title}</h1>
            </div>
            <div className="h-fit max-w-[300px] bg-[var(--secondary)] border-y-[1px] border-[var(--primary)] flex place-items-center pl-[10px]">
                <span className="h-fit w-full text-[var(--primary)] break-words px-[10px]" >{note}</span>
            </div>
            <div className="w-[80px] h-[40px] absolute bottom-[5px] right-[5px]">
                <button onClick={onDelete} className="h-[40px] w-[80px] bg-[var(--primary)] text-[var(--secondary)] rounded-[20px] hover:bg-[var(--secondary)] hover:text-[var(--primary)] hover:border-[1px] hover:border-[var(--primary)]">Delete</button>
            </div>
        </div>
    );
};

export default NoteBox;