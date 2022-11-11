import * as React from 'react'


const list = [
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

const List = () => (
  <div>
    <ul>
      {list.map((item) => {
        return <li key={item.objectID} >
          <span>{item.title}</span>
          <a>{item.url}</a>
          <span>author: {item.author} </span>
          <span>comments: {item.num_comments} </span>
          <span>points: {item.points} </span>
        </li>
      })}
    </ul>
  </div>
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

const App = () => (
  <div>
    <h1>My Hacker Stories</h1>
    <Search />
    <hr />
    <List />
    <hr />
    <List />
  </div>
)



export default App
