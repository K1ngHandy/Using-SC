import React, { useState } from 'react'
import styled from 'styled-components';

// const Button = styled.button`
//   background-color: ${pr => pr.color};
//   border: none;
//   border: 1px solid gray;
//   margin: 0.25rem;
// `
const StyledApp = styled.div`
  padding: 1rem;
  border: 1px solid black;
  background-color: ${pr => pr.theColor || 'initial'};
  h2 {
    color: green;
  }
  section {
    font-style: italic;
    &:hover {
      font-weight: bold;
    }
    p {
      color: green;
    }
  }
`

function App() {
  const [color, setColor] = useState();

  return (
    <StyledApp id="container" theColor={color}>
      <h2>Using SC</h2>
      <p>This is a styled React App</p>
      <button color='orange' onClick={() => setColor('orange')}>Orange</button>
      <button color='blue' onClick={() => setColor('blue')}>Blue</button>
      <button color='purple' onClick={() => setColor('purple')}>Purple</button>
      <section>
        <p>Paragraph inside Section</p>
      </section>
    </StyledApp>
  )
}

export default App
