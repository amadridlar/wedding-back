const chai = require('chai');
const database = require('../../src/database');
const controller = require('../../src/controllers/guestController');

const { expect } = chai;

describe('Guest controller', () => {
  describe('when is called to create a new guest', () => {
    test('save data in database', () => {
      const req = { body: { name: 'el jonas' } };
      const res = {
        status: jest.fn(),
        body: jest.fn(),
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
        status: jest.fn(),
        body: jest.fn(),
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
        status: jest.fn(),
        // body: jest.fn(body => res.body = body),
        body: jest.fn(),
      };

      database.saveGuest = jest.fn((data, callback) => {
        callback(null, {
          id: '1234',
          data: {},
        });
      });
      controller.newGuest(req, res);
      // expect(res.body.id).to.be.equal('1234');
      expect(res.body.mock.calls[0][0].id).to.be.equal('1234');
    });
    test('responds with request data', () => {
      const req = {
        body: {
          name: 'el jonas',
          lastname: 'JJI',
        },
      };
      const res = {
        status: jest.fn(),
        body: jest.fn(),
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
      };
      controller.newGuest(req, res);
      expect(res.body.mock.calls[0][0].status).to.be.deep.equal(expectedResponse.status);
      expect(res.body.mock.calls[0][0].id).to.be.deep.equal(expectedResponse.id);
      expect(res.body.mock.calls[0][0].data).to.be.deep.equal(expectedResponse.data);
    });
    test('responds with status 500 if an error occurs saving data in database', () => {
      const req = {};
      const res = {
        status: jest.fn(),
        body: jest.fn(),
      };
      database.saveGuest = jest.fn((guestData, callback) => {
        callback('error in database', {});
      });
      controller.newGuest(req, res);
      expect(res.status.mock.calls[0][0]).to.be.equal(500);
    });
    test('responds with the correct body if an error occurs saving data in database', () => {
      const req = {};
      const res = {
        status: jest.fn(),
        body: jest.fn(),
      };
      database.saveGuest = jest.fn((guestData, callback) => {
        callback('error in database', {});
      });
      controller.newGuest(req, res);

      expect(res.body.mock.calls[0][0].status).to.be.equal('error');
      expect(res.body.mock.calls[0][0].message).to.be.equal('error in database');
    });
  });
});
