const { Given, When, Then, Before } = require('cucumber');
const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;
chai.use(chaiHttp);

let guest = {};
let guestId = '';
const serverUrl = 'http://localhost:3000';

Before(function () {
  guest = {};
  guestId = '';
});

Given('new guest', function (dataTable) {
  guest = dataTable.rowsHash();
});

When('I add the guest', function (done) {
  return chai.request(serverUrl)
    .post('/back/guest/new')
    .set('Content-Type', 'application/json')
    .send(guest)
    .end(function (err, res) {
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      expect(res.body).to.have.property('_id');
      expect(res.body.data).to.be.equal(guest);
      guestId = res.body._id;
      done();
    })
});

Then('the guest is storaged correctly', function (dataTable, done) {
  const expectedGuest = dataTable.rowsHash();
  return chai.request(serverUrl)
    .get(`/back/guest/${guestId}`)
    .end(function(err, res){
      expect(err).to.be.null;
      expect(res).to.have.status(200);
      expect(res.body.data).to.be.deep.equal(expectedGuest);
      done();
    })
});
