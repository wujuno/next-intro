import Link from "next/link";
import { useRouter } from "next/router";


export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/" style={{ color: router.pathname === "/" ? "active" : "blue" }}>
        Home
      </Link>
      <Link href="/about" style={{ color: router.pathname === "/about" ? "active" : "blue" }}>
          About
      </Link>
      <style jsx>{`
      nav {
        background-color: tomato;
        a {
          text-decoration: none;
        }
        .active {
          color: yellow;
        }
      }
      `}</style>
    </nav>
  );
}