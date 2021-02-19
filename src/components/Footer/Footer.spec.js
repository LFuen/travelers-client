import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import TravelersContext from "../../context/TravelersContext";
import Footer from "./Footer";

describe(`Footer Component`, () => {
  describe(`Snapshot`, () => {
    it("renders the UI as expected", () => {
      const foot = renderer.create(<Footer />).toJSON();
      expect(foot).toMatchSnapshot();
    });
  });

  describe(`Smoke test`, () => {
    it(`Renders without crashing`, () => {
      const div = document.createElement("div");

      const value = {
        guides: 'string',
        users: 'string',
        addUser: 'string',
        updateUser: 'string',
        deleteUser: 'string',
        addGuides: 'string',
        updateGuide: 'string',
        deleteGuide: 'string',
      };

      ReactDOM.render(
        <TravelersContext.Provider value={value}>
          <Footer />
        </TravelersContext.Provider>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});
