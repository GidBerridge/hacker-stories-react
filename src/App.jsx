import * as React from 'react'
import { useState } from 'react';

const List = (props) => {
  console.log("List renders")
  return (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))
    }
  </ul>
)}

const Item = (props) => {
  console.log("Item renders")
  return (
  <li key={props.item.objectID} >
    <span>{props.item.title} </span>
    <a>{props.item.url} </a>
    <span>author: {props.item.author} </span>
    <span>comments: {props.item.num_comments} </span>
    <span>points: {props.item.points} </span>
  </li>
)}


const Search = () => {
  console.log("Search renders")
  
  const [searchTerm, setSearchTerm] = React.useState('')
  
  const handleChange = (event) => {
    setSearchTerm(event.target.value)
    // value of target (here: input HTML element)
    console.log(searchTerm)
  }
  const handleBlur = (event) => {
    // synthetic event
    console.log(event)
    // value of target (here: input HTML element)
    console.log(event.target.value)
  }

  return (
    <div>
      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' onChange={handleChange} onBlur={handleBlur} />
      <p>Searching for <b>{searchTerm}</b></p>
    </div>
  )
}

const App = () => {

  console.log("App renders")
  const stories = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ]
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search />
      <hr />
      <List list={stories} />
    </div>
  )

}

export default App
