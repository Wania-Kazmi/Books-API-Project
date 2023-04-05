
import { API_BASE_URL } from "@/utils/constant";


interface BookItems {
    id: number,
    name: string,
    type: string,
    available: boolean
}

//server data fetching to get book
async function getBook(id: number) {
  const res = await fetch(`${API_BASE_URL}/books/${id}`, {cache: "no-store"});
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = res.json()
  return data;
}



export default async function BookDetailView({ params }: { params: { id: number } }) {
    const bookDetail = await getBook(params.id);
    console.log(bookDetail);

    return(
        <div>
            <h2>{bookDetail.name}</h2>
            <p>Author: {bookDetail?.author}</p>
            <p>ISBN: {bookDetail?.isbn ?? "No ISBN"}</p>
            <p>Price: {bookDetail?.price}</p>
            <p>Current Stock: {bookDetail?.["current-stock"]}</p>
        </div>
    )
}
