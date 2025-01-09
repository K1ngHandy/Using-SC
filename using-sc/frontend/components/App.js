import React, { useState } from 'react'
import styled from 'styled-components';

const Button = styled.button`
  background-color: ${pr => pr.color};
  border: none;
  border: 1px solid gray;
  margin: 0.25rem;
`

function App() {
  const [color, setColor] = useState();

  return (
    <div>
      <h2>Using SC</h2>
      <p>This is a styled React App</p>
      <Button color='orange' onClick={() => setColor('orange')}>Orange</Button>
      <Button color='blue' onClick={() => setColor('blue')}>Blue</Button>
      <Button color='purple' onClick={() => setColor('purple')}>Purple</Button>
    </div>
  )
}

export default App
