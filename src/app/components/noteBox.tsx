'use client';

import { useState } from "react";
import TakeNote from "./takeNote"

export default function NoteBox() {
    const [titleInputValue, setTitleInputValue] = useState<string>('');
    const handleTitleInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleInputValue(e.target.value);
    }

    return (
        <div className="h-fit min-h-[260px] w-[240px] bg-[var(--secondary)] rounded-[10px]">
            <div className="h-[10%] w-full flex place-items-center py-[10px] px-[20px]">
                <h1 className="text-[var(--primary)] text-[1.1rem]">{titleInputValue}</h1>
            </div>
            <div>

            </div>

        </div>
    )
}