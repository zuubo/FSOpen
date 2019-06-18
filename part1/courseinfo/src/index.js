import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

const Header = (props) => {
  console.log('from Header: ' + props.course)
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  return (
    <>
      <Part1 p1={props.parts[0].name} e1={props.parts[0].exercises}/>
      <Part2 p2={props.parts[1].name} e2={props.parts[1].exercises}/>
      <Part3 p3={props.parts[2].name} e3={props.parts[2].exercises}/>
    </>
  )
}

const Part1 = (props) => {
  return (
    <>
      <p>
        {props.p1} {props.e1}
      </p>
    </>
  )
}

const Part2 = (props) => {
  return (
    <>
      <p>
        {props.p2} {props.e2}
      </p>
    </>
  )
}

const Part3 = (props) => {
  return (
    <>
      <p>
        {props.p3} {props.e3}
      </p>
    </>
  )
}



const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));
