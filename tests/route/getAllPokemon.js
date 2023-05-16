// 1. if there is no body provided we should return an error.

// 2. if a body is provided API should return 200 with a success message

const expect = require("chai").expect;
const request = require("request");
const { TESTING_URL } = require("../../constants/tests");

describe("Get all Pokemon API", () => {
  describe("Successfull fetched request", () => {
    it("Status", (done) => {
      request.get(`${TESTING_URL}/api/pokemon`, (_, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
});
