"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarItem({ title, param }) {
  const genre = usePathname().split("/")[2];
  return (
    <div>
      <Link
        className={`font-semibold transition-all duration-200 ${
          genre === param
            ? " text-2xl underline underline-offset-8 decoration-4 decoration-indigo-400 dark:decoration-blue-300"
            : "hover:text-indigo-500 dark:hover:text-blue-300"
        }`}
        href={`/top/${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
