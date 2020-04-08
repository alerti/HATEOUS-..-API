function booksController() {
  function post(req, res) {
    const book = new book(req, body);
    if(!req.body.title){
      res.status(400);
      return res.send("title is required");

    }
    book.save();
    res.status(201);
    return res.json();
  }
  function get(req, res){
    const query = {};
    if (req.query.genre) {
      query.genre = req.query.genre;
    }
    Book.find(query, (err, books) => {
      if (err) {
        res.send('err');
      }
      res.send('books');
    });
  }
  return {get,post};
}



module.exports = booksController;