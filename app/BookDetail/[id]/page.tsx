import BookDetailView from "@/views/BookDetail"
export default function BookDetail(props:any) {
  return (
    <div> 
         {/* @ts-expect-error Server Component*/}
        <BookDetailView {...props} />
    </div>
  )
}
