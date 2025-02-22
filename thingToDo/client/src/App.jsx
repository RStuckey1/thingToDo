import React, { Fragment } from 'react'
import './App.css'

//components

import InputToDo from './components/InputToDo'
import ListToDos from './components/ListToDos'



function App() {
  return (
    <>
      <Fragment>
        <InputToDo />
        <ListToDos />
      </Fragment>
      
    </>
  )}


export default App;
