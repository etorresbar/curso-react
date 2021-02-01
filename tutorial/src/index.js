import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'

const books = [
  {
    id: 1,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/51Tlm0GZTXL._SX329_BO1,204,203,200_.jpg',
    title: 'Atomic Habits',
    author: 'Amelia Hepworth',
  },
  {
    id: 2,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/41rttRgMMXL._SX326_BO1,204,203,200_.jpg',
    title: 'Aprender a amar (Español) Pasta blanda',
    author: 'OSHO',
  },
]

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>
      })}
    </section>
  )
}

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onclick, onMouseHover

  const clickHandler = () => {
    alert('Hello world')
  }

  const complexExample = (author) => {
    console.log(author)
  }

  return (
    <article
      className='book'
      onMouseOver={() => {
        console.log(title)
      }}
    >
      <img src={img} alt='' />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>
        reference example
      </button>
      <button type='button' onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
