const should = require('should');
const sinon  = require('sinon');
const bookController = require('../controllers/booksController')

describe('Book Controller tests:',()=>{
  describe('Post',()=>{
    it('should allow empty titles', ()=>{
      const Book = function(book){this.save=()=>{}};

      const req = {
        body:{
          author:'jon'

      }
    };
    const res = {
      status:sinon.spy(),
      send:sinon.spy(),
      json:sinon.spy()
    };
    const controller = bookController(Book);
    controller.post(req,res);
    res.status.calledWith(400).should.equal(true, `bad status${status.args[0][0]}`);
    res.send.calledWith('title is required').should.equal(true);

    });
  });

});