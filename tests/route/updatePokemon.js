// 1. if there is no body provided we should return an error.

const expect = require("chai").expect;
const request = require("request");
const { TESTING_URL } = require("../../constants/tests");
const payload = {
  title: "test",
  link: "test",
  description: "test",
  image: "test",
};
describe("update Pokemon API", () => {
  describe("No body provided validation error", () => {
    it("Status", function (done) {
      request.put(
        `${TESTING_URL}/api/pokemon/:name`,
        {
          json: {},
        },
        (_, response) => {
          expect(response.statusCode).to.equal(400);
          done();
        }
      );
    });
  });
});
