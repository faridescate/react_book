import React from 'react';

export default BooksList = ({ type, books, isActive }) => (
  <div id={`${type}-books`} className={`BooksList ${isActive}`}>
    <ul className="books">
      { books.map(
        ( book ) => {
          return (
            <li key={book.title} className="Book">
              {book.title} by {book.author}
            </li>
          );
        }
      )}
    </ul>
  </div>
)
