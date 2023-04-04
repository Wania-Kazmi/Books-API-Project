import Home from "@/views/Home"

export default function App() {
  return (
    <div>
      {/* @ts-expect-error Server Component*/}
      <Home />
    </div>
  )
}
