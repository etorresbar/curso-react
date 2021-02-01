import React from 'react'
import ReactDom from 'react-dom'

//CSS
import './index.css'
const books = [
  {
    img:
      'https://images-na.ssl-images-amazon.com/images/I/51Tlm0GZTXL._SX329_BO1,204,203,200_.jpg',
    title: 'Atomic Habits',
    author: 'Amelia Hepworth',
  },
  {
    img:
      'https://images-na.ssl-images-amazon.com/images/I/41rttRgMMXL._SX326_BO1,204,203,200_.jpg',
    title: 'Aprender a amar (Español) Pasta blanda',
    author: 'OSHO',
  },
]
function BookList() {
  return <section className='booklist'></section>
}

const Book = (props) => {
  // const {img, title, author} = props
  return (
    <article className='book'>
      <img src={props.img} alt='' />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  )
}

ReactDom.render(<BookList />, document.getElementById('root'))
