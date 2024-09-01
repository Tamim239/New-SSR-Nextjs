"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathName = usePathname();
  const router = useRouter();
  const session = useSession();
  console.log(session);
  const links = [
    {
      title: "Posts",
      path: "/posts",
    },
    {
      title: "Meals",
      path: "/meals",
    },
  ];

  const handleLogin = () => {
    router.push("/api/auth/signin");
  };

  if (pathName.includes("dashboard"))
    return <div className="bg-green-600">this dashboard navbar</div>;

  return (
    <header className="flex justify-between bg-amber-200 px-10 items-center">
      <h6 className="text-2xl">Next Hero</h6>
      <ul className="flex *:ml-4">
        {links?.map((link) => (
          <Link
            className={pathName === link.path && "text-red-500"}
            key={link.path}
            href={link.path}
          >
            {link?.title}
          </Link>
        ))}
      </ul>
      <div>
        <h6>{session?.data?.user?.name}</h6>
        <h6>{session?.data?.user?.type}</h6>
      </div>
      <div>
        <Image
          src={session?.data?.user?.image}
          alt="new"
          height={50}
          width={50}
          className="rounded-full"
        />
      </div>
      {session.status === "authenticated" ? (
        <button
          onClick={() => signOut()}
          className="p-4 bg-black text-white rounded-2xl"
        >
          Logout
        </button>
      ) : (
        <button
          onClick={handleLogin}
          className="p-4 bg-black text-white rounded-2xl"
        >
          Login
        </button>
      )}
    </header>
  );
}
