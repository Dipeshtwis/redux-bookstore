import Book from '../components/Book';

const BooksList = () => (
    <div>
     <table>
       <thead>
         <tr>
          <th>BookId</th>
          <th>title</th>
          <th>category</th>
         </tr>
       </thead>
       <tbody>
         {Book}
       </tbody>
     </table>
    </div>
);

export default BooksList;