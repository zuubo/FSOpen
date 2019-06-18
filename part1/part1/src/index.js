import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Display = ({counter}) => <div>{counter}</div>

const Button = ({onClick, text}) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const App = (props) => {
  const [ counter, setCounter ] = useState(0)
  const setToValue = (value) => setCounter(value)


  return (
    <div>
      <Display counter={counter}/>
      <Button
        onClick={() => setToValue(counter + 1)}
        text='plus'
      />
      <Button
        onClick={() => setToValue(counter - 1)}
        text='minus'
      />
      <Button
        onClick={() => setToValue(0)}
        text='zero'
      />
    </div>
  )
}

//   setTimeout(
//     () => setCounter(counter + 1),
//     1000
//   )
//
// console.log('rendering...', counter)
//
//   return (
//     <div>{counter}</div>
//   )
// }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)


// const Hello = ({ name, age }) => {
//   const bornYear = () => new Date().getFullYear() - age
//
//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//       <p>So you were probably born {bornYear()}</p>
//     </div>
//   )
// }
//
// const App = () => {
//   const name = 'Peter'
//   const age = 10
//
//   return (
//     <>
//       <h1>Greetings</h1>
//       <Hello name="Dude" age={26 + 10}/>
//       <Hello name={name} age={age}/>
//
//
//     </>
//   )
// }



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
