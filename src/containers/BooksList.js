import Book from '../components/Book';

const BooksList = ({ books }) => {
  const allBook = books.map(book => (<Book key = {`book-${book.bookId}`} book = {book} />));

  return (
    <>
     <table>
       <thead>
         <tr>
          <th>BookId</th>
          <th>title</th>
          <th>category</th>
         </tr>
       </thead>
       <tbody>
         {allBook}
       </tbody>
     </table>
    </>
  );
};

export default BooksList;