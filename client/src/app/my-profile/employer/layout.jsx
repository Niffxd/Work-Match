"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./layout.module.css";

export default function EmployerLayout({ children }) {
  const pathname = usePathname();
  return (
    <>
      <nav className={`${style["navigation-layout"]}`}>
        <Link
          className={`${style["navigation-link"]} ${
            pathname === "/my-profile/employer/publications" && style["active"]
          }`}
          href='/my-profile/employer/publications'
        >
          Publicaciones
        </Link>
        <Link
          className={`${style["navigation-link"]} ${
            pathname === "/my-profile/employer/postulates" && style["active"]
          }`}
          href='/my-profile/employer/postulates'
        >
          Postulados
        </Link>
        <Link
          className={`${style["navigation-link"]} ${
            pathname === "/my-profile/employer/matches" && style["active"]
          }`}
          href='/my-profile/employer/matches'
        >
          Matches
        </Link>
      </nav>
      {children}
    </>
  );
}
