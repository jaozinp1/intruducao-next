import Link from "next/link"

export default function Temp() {
    return(
        <div>
            <h1>Acesso a telas</h1>
            <Link href={'/sobre'}>Sobre</Link>
        </div>
    )
}
