import Link from "next/link";
import { useRouter } from "next/router";


export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/" >
        <span style={{ color: router.pathname === "/" ? "active" : "blue" }}>
          Home
          </span>
      </Link>
      <Link href="/about" >
          <span style={{ color: router.pathname === "/about" ? "active" : "blue" }}>
          About
          </span>
      </Link>
      <style jsx>{`      
        a {
          text-decoration: none;
        }
        .active {
            color: tomato;
        }              
      `}</style>
    </nav>
  );
}