const BooksForm = () => {
  const category = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
  return (
    <div>
      <h2>Add Book here</h2>
      <form action="">
        <label for="title">Book title:</label><br>
        <input type="text" id="title" name="title" placeholder="Title of the book"><br>
        <input type="checkbox" id="action" name="action" value="Bike">
        <label for="action"> Action</label><br>
        <input type="checkbox" id="history" name="history" value="Car">
        <label for="history"> History</label><br>
        <input type="checkbox" id="kids" name="kids" value="Boat">
        <label for="kids"> Kids</label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default BooksForm;