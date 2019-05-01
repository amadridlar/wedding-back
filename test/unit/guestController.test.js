const chai = require('chai');
const database = require('../../src/database');
const controller = require('../../src/controllers/guestController');

const expect = chai.expect;

describe('Guest controller', () => {
  describe('when is called to create a new guest', () => {
    test('save data in database', () => {
      const req = { body: { name: 'el jonas' } };
      const res = {
        status: jest.fn(() => res),
        body: jest.fn(() => res),
      };

      database.saveGuest = jest.fn((data, callback) => {
        callback(null, {});
      });

      controller.newGuest(req, res);
      expect(database.saveGuest.mock.calls[0][0]).to.be.equal(req.body);
    });
    test('responds with status 200', () => {
      const req = { body: { name: 'el jonas' } };
      const res = {
        status: jest.fn(() => res),
        body: jest.fn(() => res),
      };

      database.saveGuest = jest.fn((data, callback) => {
        callback(null, {});
      });

      controller.newGuest(req, res);
      expect(res.status.mock.calls[0][0]).to.be.equal(200);
    });
    test('responds with guest id', () => {
      const req = { body: { name: 'el jonas' } };
      const res = {
        status: jest.fn(() => res),
        body: jest.fn((body) => res.body = body),
      };

      database.saveGuest = jest.fn((data, callback) => {
        callback(null, {
          id: '1234',
          data: {},
        });
      });
      controller.newGuest(req, res);
      expect(res.body.id).to.be.equal('1234');
    });
    test('responds with request data',  () => {
      const req = {
        body: {
          name: 'el jonas',
          lastname: 'JJI',
        }
      };
      const res = {
        status: jest.fn(() => res),
        body: jest.fn(() => res),
      };
      database.saveGuest = jest.fn((data, callback) => {
        callback(null, {
          id: '1234',
          guestData: req.body,
        });
      });
      const expectedResponse = {
        status: 'success',
        id: '1234',
        data: req.body,
      }
       controller.newGuest(req, res);
      expect(res.body.mock.calls[0][0]).to.be.deep.equal(expectedResponse);

    });
    test.todo('responds with status 500 if an error occurs saving data in database');
  });
});
