// if a request is successfull returns a success message

const expect = require("chai").expect;
const request = require("request");
const { TESTING_URL } = require("../../constants/tests");
const title = "test";
describe("Get Pokemon by ID API", () => {
  describe("Successfully fetched by ID request", () => {
    it("Status", (done) => {
      request.get(`${TESTING_URL}/api/pokemonbyid/:name`, (_, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });
  });
});
