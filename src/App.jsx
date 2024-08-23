import React from 'react'
import { useState } from "react"

function App() {
  const [title, setTitle] = useState("My name is Javed")

  function updateTitle() {
    setTitle("My name is " + Math.random());
  }
  return (
    <>
    <button onClick={updateTitle}>Click me to change title</button>
      <Header title = {title} />
      <Header title = "Javed2" />
    </>
  )
}

const Header = React.memo(function Header({title}) {
  return <div>
  {title}
  </div>
})

export default App
