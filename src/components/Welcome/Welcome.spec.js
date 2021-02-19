import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import renderer from "react-test-renderer";
import TravelersContext from "../../context/TravelersContext";
import Welcome from "./Welcome";

describe(`Welcome Component`, () => {
  describe(`Snapshot`, () => {
    it("renders the UI as expected", () => {
      const welcome = renderer.create(<BrowserRouter>
      <Welcome /></BrowserRouter>).toJSON();
      expect(welcome).toMatchSnapshot();
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
        <BrowserRouter>
          <TravelersContext.Provider value={value}>
            <Welcome />
          </TravelersContext.Provider>
        </BrowserRouter>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});