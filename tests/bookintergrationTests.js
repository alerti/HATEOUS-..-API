require('should');

const request = require('supertest');
const mongoose  = require ('mongoose');
process.env.ENV = 'Test';

const app = require('../app.js');

describe('book crud test',()=>{
  it('should allow a book to be posted and read and _it',(done)=>{
    const bookpost = {title:'book',author:'jon',genre:'fiction'};
   agent.post('/api/books')
   .send(bookpost)
   .expect(200)
   .end((err,results)=>{
     results.body.read.should.not.equal('flase');
     results.body.should.have.property('_id');
     done();
   });
  });
  afterEach((done)=>{
    Book.deleteMany({}).exec();
    done();
  });
  after((done)=>{
    mongoose.connection.close();
    done();
  });
});