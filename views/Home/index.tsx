import React from "react";
import { API_BASE_URL } from "@/utils";
import Link from "next/link";

//server data fetching to get books List
async function getBooksList() {
  const res = await fetch(`${API_BASE_URL}/books`);
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
}

interface BookItems {
  id: number;
  name: string;
  type: string;
  available: boolean;
}

export default async function Home() {
  const books = await getBooksList();
  console.log(books);
  return (
    <div>
      <div className="container grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-8">
        {books?.map((item: BookItems) => (
          <Link href={`bookDetail/${item.id}`} key={item.id}>
            <div className="item" key={item.id}>
              <img src="https://picsum.photos/400/300" alt="" />
              <div>
                <h2>{item.name}</h2>
                <p>
                  <span className="font-bold">Type:</span> {item.type}
                </p>
                <p>
                  <span className="font-bold">In Stock:</span>{" "}
                  {item.available === true ? "Available" : "Not Available"}
                </p>
                {/* <a href="#">Read more</a> */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
