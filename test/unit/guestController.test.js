const chai = require('chai');
const database = require('../../src/database');
const controller = require('../../src/controllers/guestController');

const { expect } = chai;

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
    test.todo('responds with status 200');
    test.todo('responds with guest id');
    test.todo('responds with request data');
  });
});
