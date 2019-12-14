import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import { CONNREFUSED } from 'dns';
const Header = (params) =>{
    console.log(params);
    return(
        <div><h1>{params.course}</h1></div>
    )
}
const Content = (params) =>{
  return (
      <div>
          <Part part= {params.part}/>
      </div>
  )
}
const Part = (params) =>{
    let value = params.part;
    console.log(value);
    return(
    <p>
        hi
    </p>
    )
}
const Total = (params) =>{
    console.log(params.values);
    // params.values.array.forEach(element => {
    //     console.log(element);
    // });
    var ans=params.values.reduce((total,value)=>total+value, 0);
    return (
        <div>
            {ans}
        </div>
    )
}
const App = () => {
  const course = {  
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
};
    return (
     <div>
          <Header course = {course.name}/>
           <Content part={course.parts}/>
          {/*<Total values ={course.parts}/> */}
    </div>
  )
  }
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
