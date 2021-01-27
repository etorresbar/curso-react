import React from 'react'
import ReactDom from 'react-dom'

function BookList() {
  return (
    <section>
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article>
      <Image></Image>
      <Title></Title>
      <Author />
    </article>
  )
}

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/51Tlm0GZTXL._SX329_BO1,204,203,200_.jpg'
    alt='Atomic Habits'
  />
)

const Title = () => <h1>Atomic Habits</h1>

const Author = () => <h4>James Clear</h4>

ReactDom.render(<BookList />, document.getElementById('root'))
