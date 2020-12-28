import Book from '../components/Book';

const BooksList = () => {
  return (
     <table>
       <tr>
         <th>Book ID</th>
         <th>title</th>
         <th>category</th>
       </tr>
       <tr>
         {Book}
       </tr>
     </table> 
  );
}

export default BooksList;