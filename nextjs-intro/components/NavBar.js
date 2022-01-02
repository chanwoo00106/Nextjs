import Link from "next/link";
import { useRouter } from "next/router";
import style from "./NavBar.module.css";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href="/">
        <a className={router.pathname === "/" ? style.active : ""}>Home</a>
      </Link>
      <Link href="/about">
        <a className={router.pathname === "/about" ? style.active : ""}>
          About
        </a>
      </Link>
    </nav>
  );
}
