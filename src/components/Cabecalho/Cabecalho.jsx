import Link from "next/link";

export default function Cabecalho() {
  return (
    <header className='cabecalho'>
    <nav>
      <Link href="/">HOME</Link>
      <Link href="/form">FORM</Link>
      <Link href="/git-users">USERS</Link>
      <Link href="/add-prod">ADD-PROD</Link>
      <Link href="/produtos/mamao" >MAMÃO</Link>
      <Link href="/produtos/melao" >MELÃO</Link>
      <Link href="/produtos/manga" >MANGA</Link>
    </nav>
  </header>
  )
}
