import Link from "next/link";

function Home() {
    return (
    <>
    <h1>Home com teste</h1>
    <div>
    <Link href="/Empreendimentos">
        <a>Pagina dos empreendimentos</a>

    </Link>
    </div>
    <div>
    <Link href="/Carrossel">
        <a>Pagina do Carrossel</a>

    </Link>
    </div>
    </>
    )
}
export default Home