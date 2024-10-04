import { link } from "fs"
import Link from "next/link"

export default async function ControlPanel() {
    const linkStyle = "h-[40px] flex bg-[var(--secondary)] hover:bg-[var(--primary)] rounded-[30px] text-center text-[var(--primary)] hover:text-[var(--secondary)] flex place-items-center place-content-center transition-all transition-[2s] hover:border-[1px] hover:border-[var(--secondary)] mb-[7px]" 
    return (
        <>
            <section className="h-[100vh] w-[15%] border-r-[1px] border-[var(--secondary)] flex place-items-center place-content-center">
                <div className="h-fit min-h-[100%] w-[80%] pt-[20px]">
                    <Link className={linkStyle} href="/">Notes</Link>
                    <Link className={linkStyle} href="/">Bin</Link>
                </div>
            </section>
        </>
    )
}