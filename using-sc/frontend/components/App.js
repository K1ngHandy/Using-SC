import React, { useState } from 'react'

function App() {
  const [color, setColor] = useState();

  return (
    <div>
      <h2>Using SC</h2>
      <p>This is a styled React App</p>
      <button>Orange</button>
      <button>Blue</button>
      <button>Purple</button>
    </div>
  )
}

export default App
