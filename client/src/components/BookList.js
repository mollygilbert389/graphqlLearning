import React from "react";
import { Card, CardText, CardHeader, CardTitle, CardBody } from 'reactstrap';

const BookList = ({books}) => {
  if(!books.length) {
    return <h3>There are no books in this library</h3>
  } else {
    return (
      <div>
        {books.map((book) => {
          return (
            <Card outline color='secondary' key={book._id}>
            <CardHeader>Title: {book.title}</CardHeader>
            <CardBody>
              <CardTitle>Author: {book.author}</CardTitle>
              <CardText># of Pages: {book.pages}</CardText>
            </CardBody>
          </Card>
          )
        })}
      </div>
    )
  }
}

export default BookList;
