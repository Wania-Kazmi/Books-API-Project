import Link from "next/link";
import React from "react";

export default function Header() {
  return( <div className="w-full flex justify-between items-center bg-white py-2 px-4 border border-b-[#e6ebf4] ">
    <Link href={"/"} className="text-lg font-bold text-purple-600">Book API</Link>
    <Link href={"/register"} className="bg-[#6469ff] font-medium text-white py-2 px-4 rounded-md">Register</Link>
  </div>
  )
}
