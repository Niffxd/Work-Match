"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./layout.module.css";

export default function EmployeeLayout({ children }) {
  const pathname = usePathname();
  return (
    <>
      <nav className={`${style["navigation-layout"]}`}>
        <Link
          className={`${style["navigation-link"]} ${
            pathname === "/my-profile/employee/applications" && style["active"]
          }`}
          href='/my-profile/employee/applications'
        >
          Postulaciones
        </Link>
        <Link
          className={`${style["navigation-link"]} ${
            pathname === "/my-profile/employee/matches" && style["active"]
          }`}
          href='/my-profile/employee/matches'
        >
          Matches
        </Link>
      </nav>
      {children}
    </>
  );
}
