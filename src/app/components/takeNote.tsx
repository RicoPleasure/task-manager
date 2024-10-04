'use client';

import { useState } from "react"
import NoteBox from "./noteBox"

export default function TakeNote() {
    
    return (
        <>
            <div className="h-[100px] w-full flex place-content-center place-items-center">
                <form action="">
                    <input type="text" className="titleInput h-[40px] w-[300px] text-[var(--primary)]"/>
                    <button type="submit">Create Note</button>    
                </form>
            </div>
        </>
    )
}