const BooksForm = () => {
  // eslint-disable-next-line no-unused-vars
  const category = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <>
      <h2>Add Book here</h2>
      <form>
        <label htmlFor="title">Book title:</label>
        <input type="text" id="title" name="title" placeholder="Title of the book" />
        <input type="checkbox" id="action" name="action" value="Bike" />
        <label htmlFor="action"> Action</label>
        <input type="checkbox" id="history" name="history" value="Car" />
        <label htmlFor="history"> History</label>
        <input type="checkbox" id="kids" name="kids" value="Boat" />
        <label htmlFor="kids"> Kids</label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default BooksForm;