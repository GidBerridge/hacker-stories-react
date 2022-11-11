import * as React from 'react'

const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))
    }
  </ul>
)

const Item = (props) => (
  <li key={props.item.objectID} >
    <span>{props.item.title} </span>
    <a>{props.item.url} </a>
    <span>author: {props.item.author} </span>
    <span>comments: {props.item.num_comments} </span>
    <span>points: {props.item.points} </span>
  </li>
)


const Search = () => {
  const handleChange = (event) => {
    // synthetic event
    console.log(event)
    // value of target (here: input HTML element)
    console.log(event.target.value)
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
    </div>
  )
}

const App = () => {
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
