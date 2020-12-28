import Book from '../components/Book';

const BooksList = () => (
     <table>
       <tr>
         <th>BookId</th>
         <th>title</th>
         <th>category</th>
       </tr>
       {Book}
     </table>
);

export default BooksList;