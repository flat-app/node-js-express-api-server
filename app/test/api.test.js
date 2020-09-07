const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index');
chai.use(chaiHttp);
chai.should();

describe('insurance', () => {
  describe('GET /', () => {
    it('should get all of insurance', (done) => {
      chai.request(app)
        .get(`/`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    it('should return type application/json', (done) => {
      chai.request(app)
        .get(`/`)
        .end((err, res) => {
          res.type.should.equal('application/json');
          done();
        });
    });
  })
})



// TODO for unit testing
// [
//     {
//         "deductible": 1000,
//         "stop_loss": 10000,
//         "oop_max": 5000,
//         "createdAt": "2020-09-07T16:58:50.007Z",
//         "updatedAt": "2020-09-07T16:58:50.007Z",
//         "id": "5f5666c9ba042e21e7c8863d"
//     },
//     {
//         "deductible": 1200,
//         "stop_loss": 13000,
//         "oop_max": 6000,
//         "createdAt": "2020-09-07T16:58:50.008Z",
//         "updatedAt": "2020-09-07T16:58:50.008Z",
//         "id": "5f5666caba042e21e7c8863e"
//     },
//     {
//         "deductible": 1000,
//         "stop_loss": 10000,
//         "oop_max": 6000,
//         "createdAt": "2020-09-07T16:58:50.008Z",
//         "updatedAt": "2020-09-07T16:58:50.008Z",
//         "id": "5f5666caba042e21e7c8863f"
//     }
// ]

  // describe('POST /api/insurance/', () => {
  //   it('should return 3 api object', (done) => {
  //     const api = {
  //     };
  //     chai.request(app)
  //       .post(`/api/insurance/`)
  //       .send(insurance)
  //       .end((err, res) => {
  //         res.should.have.status(200);
  //         res.body.should.be.a('object');
  //         res.body.should.deep.equal(insurance);
  //         done();
  //       });
  //   });
